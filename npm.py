

import threading
import os
import webbrowser
import time

def function1():
    os.system("powershell \" "+"npm start"+"\"")

t1 = threading.Thread(target=function1)
t1.start()
time.sleep(2)

webbrowser.open('http://127.0.0.1:8081/index.html', new=2)
os.system("powershell \" "+"npm run test"+"\"")
