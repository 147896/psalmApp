#!/usr/bin/env python3
# -*- coding: UTF-8 -*-
import json
import pymongo
#import scraping


for salmo in range(1,151):
   _file = open('jsonfiles/salmos_%s.json' %(salmo), 'rb')
   rec = _file.read()
#   connection = pymongo.MongoClient("mongodb://localhost/salmos")
#   db = connection.salmos
#   record1 = db.book_collection
   records = json.loads(rec)
   #print json.dumps(json.loads(records), indent = 4, sort_keys=True)[0]
   print(json.dumps(records, indent = 4, sort_keys=True))
#   record1.insert(records)
   #record1.insert(records['chapter']['verse'][0])
   _file.close()

#_file = open('salmos_1.json', 'rb')
#rec = _file.read()
#connection = pymongo.MongoClient("mongodb://localhost/salmos")
#db = connection.salmos
#record1 = db.book_collection
#records = json.loads(rec)
#print json.dumps(json.loads(records), indent = 4, sort_keys=True)[0]
#record1.insert(records)
   #record1.insert(records['chapter']['verse'][0])
#_file.close()

