#!/bin/env python
import os
import praw
import pymongo
from dotenv import load_dotenv
from datetime import datetime

def main():
    load_dotenv()
    r, db, client = get_clients()
    json_entries = get_json_entries(r, db)
    if json_entries:
        add_to_database(db, json_entries)
    client.close()
    
    print(f"Completed database update at: {datetime.now().strftime('%d/%m/%Y %H:%M:%S')}")


def add_to_database(db, json_entries):
    # Try adding json entries to the database.
    try:
        result = db.userpings.insert_many(json_entries)
        print(result)
    except pymongo.errors.BulkWriteError as bwe:
        print(f'Error - Could not successfully insert json entries in database: {bwe.details}')


def get_json_entries(r, db):
    # Grab json entries from groupbot

    groupbot = r.redditor('groupbot')
    db_entries = []

    for comment in groupbot.comments.new(limit=None):
        gb_strings = comment.body.split()

        if gb_strings[1] == 'members' and gb_strings[2] == 'of': 
            ping_group = gb_strings[3]

            parent_id = comment.parent_id[3:]
            parent = r.comment(parent_id)

            if not db.userpings.count_documents({'child_id': comment.id}, limit=1):
                if parent.author is not None:

                    ping_json = {
                        'id': parent.id,
                        'child_id': comment.id,
                        'ping_group': ping_group,
                        'author': parent.author.name,
                        'body': parent.body,
                        'distinguished': parent.distinguished,
                        'edited': parent.edited,
                        'permalink': parent.permalink,
                        'time': parent.created_utc,
                        'parent_submission': parent.submission.title,
                        'body': {'md': parent.body, 'html': parent.body_html}
                    }
                    db_entries.append(ping_json)
            else:
                break

    return db_entries


def get_clients():
    # Get an instance of the mongoDb client and reddit praw client.
    try:
        mdb_client = pymongo.MongoClient()
        database = mdb_client[os.getenv('DATABASENAME')]
    except pymongo.errors.ConnectionFailure as cf:
        print(f'Error - Could not get an instance of MongoClient: {cf}')

    try:
        reddit = praw.Reddit(
            client_id=os.getenv('CLIENT_ID'),
            client_secret=os.getenv('CLIENT_SECRET'),
            password=os.getenv('PASSWORD'),
            user_agent='groupbot-scraper',
            username=os.getenv('USERNAME'),
        )
    except Exception as e:
        print(f'Error - Could not get an instance of Reddit: {e}')

    return reddit, database, mdb_client


if __name__ == '__main__':
    main()