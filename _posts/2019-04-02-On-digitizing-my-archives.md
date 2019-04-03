---
layout: post
date: 2019-04-02
---

I've decied to get serious about digitizing my store of magazines. That means, that not only must I scan in a thousand pages of my collection of antiue books and
pges, I must discover a way of eficiently OCRing the scaans. I've got a Scansnap SV600. I've got Finereader Pro (12, for the mac), why won't this go any faster?

Perhaps it's because Finereader Pro is good at reading contemporary typefaces printed on clean, white paper, and not reading old-fashioned type on yellowing paper. 
I do remember using something called [ScanTailor](https://scantailor.org) to preprocess my scans. Trouble, is, it's rather slow-- and single threaded. No, what I need is a fork of scantailor that actually uses more than one core. [ScanTailor advanced](https://github.com/4lex4/scantailor-advanced/releases) perhaps?

Trouble is, scantailor advanced doesn't have a mac binary, and cmake doesn't have enough hints to generate the necessary makefiles.

Here's my solution

```bash
#!/bin/bash
export Qt5_DIR=/sw/lib/qt5-mac/
export Qt5Core_DIR=/sw/lib/qt5-mac/lib/cmake/Qt5Core/
export Qt5Gui_DIR=/sw/lib/qt5-mac/lib/cmake/Qt5Gui/
export Qt5Widgets_DIR=/sw/lib/qt5-mac/lib/cmake/Qt5Widgets/
export Qt5Xml_DIR=/sw/lib/qt5-mac/lib/cmake/Qt5Xml/
export Qt5Network_DIR=/sw/lib/qt5-mac/lib/cmake/Qt5Network/
export Qt5LinguistTools_DIR=/sw/lib/qt5-mac/lib/cmake/Qt5LinguistTools
export Qt5OpenGL_DIR=/sw/lib/qt5-mac/lib/cmake/Qt5OpenGL 
cmake -DCMAKE_CXX_FLAGS="-std=c++11 -stdlib=libc++"   -H. -Bbuild
```

Works for me. Links with the fink ports of qt5, Installs into /usr/local/bin, launches on the comamnd line. Not as nice as a full fledged mac app.

So, scantailor very efficiently turns those color jpegs into straightened, moochrome tiffs. And Finereader seems to read those fairly quickly. And once I have
ocred pdfs of my magazines, Devonthink Pro can construct a database around the actual contents of the magazines.

Things to do: unwarp the images. Scansnap's software is designed to unwarp an opened book, with the gutter of the page placed perpendicular to the scanning arm. Alas, my victorian magazines are 11"x17", so the gutter is paralell to the scan arm. And Fujitsu, as far as I know, doesn't dewarp that way. So, something to preprocess.

Devonthink's concordance says it has  828,000 words in the  "La Mode Pratique" database. The most frequent word is "les". (22,000). There are so far, 2300 instances of the word Patron. I'm hoping for a bit more insight once I finish this round of scanning.

half a year from 1892
a full year  from 1893
a few scattered issues from 1894, 1895, and 1899
and a full year from 1897



