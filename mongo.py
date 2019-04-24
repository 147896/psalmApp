#!/usr/bin/env python3
# -*- coding: UTF-8 -*-
import json
import pymongo
import scraping


connection = pymongo.MongoClient("mongodb://localhost")
db = connection.book

record1 = db.book_collection

#records = json.dumps(scraping.parser)

#print json.dumps(json.loads(records), indent = 4, sort_keys=True)[0]
