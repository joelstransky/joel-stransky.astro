---
title: Kite Screen
date: 2019-12-05
description: "A browser extenstion for picture in picture video"
image: 'assets/kite-screen440x280.png' # Add image post (optional)
tag: [chrome, extension, picture-in-picture, html, css, javascript] # add tag
---


[![Available on Chrome Web Store](assets/UV4C4ybeBTsZt43U4xis.png)](https://chromewebstore.google.com/detail/kite-screen/defdbpekkkcojmcogkfgehlfinjhcdno 'Available on Chrome Web Store')

For a brief moment, Netflix tested picture-in-picture on desktop. I was very fond of the feature and sad when it was gone shortly there after. That lead me to wonder how they pulled it off in the first place and was excited to see it's part of the chrome api. Chrome provided their own extension but it's more of a tech demo and I didn't like that it chose the most focused video on the page. Since the magic part is more or less a one liner, it was the perfect opportunity to learn how to create browser extensions.

![Kite Screen picture-in-picture][pip]

[pip]: assets/kite-screen1400x560.png 'Kite Screen picture-in-picture'

I was not happy with the minimal amount of vanilla javascript so I started work on a template + npm library to help make the intercommunication and publishing fun again. More on that in another post.
