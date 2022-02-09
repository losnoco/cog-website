---
title: Cog features
---

*   Gapless playback
*   Automatic updates
*   Last.fm support
*   Global hotkeys
*   Desktop notifications
*   Shuffle, both albums and tracks
*   Repeat single track, album or whole playlist
*   Playback from HTTP(S) sources, both livestreams and hosted files
    *   Supports Apple's HTTP Live Streaming (HLS) using FFmpeg
    *   Supports live metadata updates of continuous streaming servers, including Shoutcast, Icecast, Ogg Vorbis comments, and timed ID3v2 packets, where employed by the streamer
*   Graphic equalizer
*   Headphone or speaker virtual surround by HRIR covolution filter
    *   Uses the [HeSuVi](https://sourceforge.net/projects/hesuvi/) HRIR format, in either WAV or Wavpack float format
    *   A preset is built-in, but I supply the most useful set of presets [here](https://cogcdn.cog.losno.co/HeSuVi-hrir-basic.zip)

Supported formats
-----------------

*   MP3
*   WAV
*   AAC
    *   LC-AAC
    *   HE-AAC
    *   HE-AACv2
    *   xHE-AAC (USAC)
*   Apple Lossless (ALAC)
*   FLAC (including OggFLAC)
*   Ogg Opus
*   Ogg Vorbis
*   AC3
*   Windows Media Audio
*   DTS
*   HDCD
*   TTA True Audio
*   TAK (Tom's Lossless Audio Kompressor)
*   Monkey's Audio (APE)
*   TwinVQ
*   RealAudio
*   ATRAC3
*   Musepack
*   WavPack
*   MIDI
    *   SoundFont support via [FluidSynth](https://www.fluidsynth.org/).
    *   FM synthesis via [Nuked OPL3](https://nukeykt.retrohost.net/),
    *   Audio Unit synthesizer support, including Apple's DLSMusicDevice and [Roland Sound Canvas VA](https://www.roland.com/us/products/rc_sound_canvas_va/).
*   Shorten
*   Tracker music via [libopenmpt](https://lib.openmpt.org/libopenmpt/) ([supported formats](https://openmpt.org/features#modules)).
*   SID
*   Game music
    *   GBS
    *   NSF
    *   SPC
    *   VGM
    *   VGZ
    *   PSF
    *   SSF
    *   DSF
    *   QSF
    *   USF
    *   NCSF
    *   2SF
    *   Streamed music via [vgmstream](https://vgmstream.org)
*   Archive files
    *   ZIP
    *   RAR
    *   GZip
    *   7Z
