# pip install pytube
import pytube

link = input('https://youtube.com/watch?v=')
yt = pytube.Youtube(link)
yt.streams.first().download()
print('download', link)