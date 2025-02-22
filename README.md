# Stop watch

This is an adaptation of [Yusuf Sezer’s] analog-clock [demo] (forked from
[yusufsefasezer/analog-clock]).

I use this to generate a stopwatch animation for testing my flashcard generation
tool, [yanki]. I took screenshots of the each tick of the stopwatch (it can be
advanced by clicking), then converted those screenshots into a video with a
repeating tone with:

    ffmpeg -hide_banner -y -framerate 60 -i shot_%02d.png \
      -filter_complex "aevalsrc='sin(5*2*PI*t)*sin(220*2*PI*t)':d=1[a]" \
      -map '0:v' -map '[a]' -c:v libx264 -pix_fmt yuv420p -preset slow out.mp4

# License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file
for details.

[Yusuf Sezer’s]: https://www.yusufsezer.com
[demo]: https://www.yusufsezer.com/projects/analog-clock/
[yusufsefasezer/analog-clock]: https://github.com/yusufsefasezer/analog-clock
[yanki]: https://github.com/danielparks/yanki
