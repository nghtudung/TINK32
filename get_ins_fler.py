import instaloader
import pandas as pd
import time

def getFler():
    # Creating an instance of the Instaloader class
    bot = instaloader.Instaloader()
     
    # Loading a profile from an Instagram handle
    profile = instaloader.Profile.from_username(bot.context, 'it.hoc.it.khon')
    return profile.followers

while True:
    f = open("fler.txt", "w")
    f.write(str(getFler()))
    f.close()
    print("abc")
    time.sleep(5)