import subprocess
import os

ffmpeg_exe = r"C:\Users\freef\AppData\Local\Programs\Python\Python313\Lib\site-packages\imageio_ffmpeg\binaries\ffmpeg-win-x86_64-v7.1.exe"
url = "https://www.youtube.com/watch?v=IIz5zEPHBHk"
raw_video = r"d:\avenueconstrcutions\public\videos\raw_1080p.mp4"
final_video = r"d:\avenueconstrcutions\public\videos\avenue-ahsan-palace-showcase.mp4"

# Remove any old partials
for f in [
    raw_video,
    raw_video + ".part",
    r"d:\avenueconstrcutions\public\videos\raw_1080p.f137.mp4",
    r"d:\avenueconstrcutions\public\videos\raw_1080p.f137.mp4.part",
    r"d:\avenueconstrcutions\public\videos\raw_1080p.f140.m4a",
    r"d:\avenueconstrcutions\public\videos\raw_1080p.f140.m4a.part",
    r"d:\avenueconstrcutions\public\videos\avenue-ahsan-palace.f401.mp4.part"
]:
    if os.path.exists(f):
        try:
            os.remove(f)
        except Exception:
            pass

print("1. Downloading 1080p Full HD video...")
cmd_download = [
    "yt-dlp",
    "--js-runtimes", "node",
    "-f", "bestvideo[height<=1080]+bestaudio/best[height<=1080]/best",
    "--ffmpeg-location", ffmpeg_exe,
    "--merge-output-format", "mp4",
    "-o", raw_video,
    "--force-overwrites",
    url
]
subprocess.run(cmd_download, check=True)

print("2. Cutting first 5 seconds, removing metadata, encoding high quality...")
cmd_ffmpeg = [
    ffmpeg_exe,
    "-y",
    "-ss", "5",
    "-i", raw_video,
    "-c:v", "libx264",
    "-crf", "23",
    "-preset", "medium",
    "-c:a", "aac",
    "-b:a", "192k",
    "-map_metadata", "-1",
    "-movflags", "+faststart",
    final_video
]
subprocess.run(cmd_ffmpeg, check=True)

if os.path.exists(raw_video):
    try:
        os.remove(raw_video)
    except Exception:
        pass

print("Successfully created:", final_video)
print("File size:", round(os.path.getsize(final_video) / (1024 * 1024), 2), "MB")
