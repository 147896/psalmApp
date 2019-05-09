# -*- coding: UTF-8 -*-
import json

f = open('jsonfiles/salmos_1.json', 'rb')

jload = json.load(f)

print(jload['chapter']['ID']) 

f.close()
