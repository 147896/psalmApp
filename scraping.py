# -*- coding: UTF-8 -*-
import requests, xmltodict, json
import collections


for cap in range(1,151):
   _file = open('jsonfiles/salmos_%s.json' %(cap), 'a')
   url = 'https://data.bcdn.in/v18/bibles/acf/Ps/%s.xml' %(cap)
   response = requests.get(url)
   parser = json.dumps(xmltodict.parse(response.text))
   result = json.loads(parser, object_pairs_hook=collections.OrderedDict)
   _file.write(json.dumps(result, indent=4, default=json))
   _file.close()
