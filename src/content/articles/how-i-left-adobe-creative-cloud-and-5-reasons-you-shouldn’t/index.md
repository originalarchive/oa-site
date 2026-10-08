---
title: How I left Adobe Creative Cloud (and 5 reasons you shouldn’t)
description: 8 reasons I left Adobe Creative Cloud subscription service and 5 reasons you should stay. I wanted to save some money and take back control of my website and I re-discovered control, flexibility and the enjoyment of building and maintaining a website I use daily.
date: 2026-10-08
draft: false
coverImage: oa_Hole_in_the_fence.png
coverAlt: An oa article image of rocks on the beach. Site logo.
hideImage: false
tags:
  - photography
  - tech
  - opinion
---

Start with the end, right?

The cheapest Adobe Lightroom package is £11.99 per month, at the time of writing, and for that you get Lightroom Classic and Lightroom, portfolio (web hosting for your portfolio with some cool client functions and ability to use a custom domain), 1 TB of storage and a few other bits and bobs including some access to Adobe's AI - Firefly.

If that amount of money a month - a couple of beers at some pubs - doesn't bother you, then I would recommend you stay with Adobe. Lightroom Classic is excellent. The portfolio concept is really good even if photo loading is very slow. Storage is generous.

If you are a lover of Photoshop you can pick up a combined subscription with Lightroom and Photoshop for about £20 a month. 

### My decision

But I made a different decision and walked away from Adobe because I'm trying to cut unnecessary costs, and some other reasons. I'll work through those reasons but before I get to that...

Whether you should leave will most likely depend on whether your reasons align with mine because otherwise, and I must be clear, Adobe offers good value for money and a much easier solution to basic photo editing, storage and a website than the alternatives.

As you read this you will understand, probably quicker than I did, that saving money took second place to the control, flexibility and enjoyment of building a website I use daily. I had a great time with this project. 

Before I dive into the alternatives and what choices I made, I will give some more solid reasons for wanting to stop paying Adobe every month.

### Reasons for leaving

1. I don't like subscriptions when there are alternatives.
2. I don't feel like I'm getting value for money from Lightroom. I'm not a heavy user of Lightroom Classic. Tag, sort, crop, add a few to my portfolio.
3. Portfolio is really cool for a 'free' portfolio site but it doesn't do well for managing articles or travel journals and it's really slow to load photos. 
4. I worked out how much I was spending on web stuff I wanted versus web stuff I was ambivalent about. When I included Adobe and a couple of other services, I realised I could save well over £250 a year.
5. I really don't like Lightroom (that's the online/lite version for creative cloud). It just doesn't fit my workflow. If I'm taking pics with my Sony a7 then I want full Lightroom Classic. If I'm taking pics with my iPhone then I'm happy with Apple Photos. 
6. I'm not confident Adobe won't increase the price to take advantage of the lock-in. Last year I received an email near renewal time telling me the subscription plan was changing and that to lock in the best price I would have to buy annually. They have slightly softened their stance, but I'm still uneasy.
7. I'm not really using all the other Adobe bits included with the subscription. I used to love Adobe Express (premium) that came with the 2024 and earlier version of the subscription but they took this perk away in 2025. 
8. I fancied a better website and couldn't do what I wanted with the tools in Adobe-land.

That's enough negatives. I felt a bit bad writing some of those against an £11.99 a month product.

### The five reasons to stay with Adobe:

1. It's only £11.99 a month (or a bit more with Photoshop)
2. You get mobile friendly software 
3. You get desktop class powerhouse software for real organisation
4. The Adobe Portfolio platform makes linking Lightroom and Lightroom Classic to the web so simple and building a portfolio is drag and drop easy.
5. Online storage is generous at 1TB

### To leave, these were/are the things I want:

1. The solution must be cheaper. Could I get equal or better value without a subscription? I decided my budget would start at £0.
2. Photo cataloguing software that does tagging and keywords well. Would free or one-off licence software give me what I need?
3. Website and web hosting. Most options would cost me money. This one seems like it would be a challenge. And could I do a better job than Adobe Portfolio?
4. A better, more consistent workflow for my Sony a7 and iPhone. Can't be any worse than now.
5. A way to do simple photo edits and something that allows me to do simple page layouts and flyers from time to time. Adobe Express is still free for me. The non-premium version. So no loss. Canva is really good with its free version, and they have Affinity too.
6. I want a fast, agile website with photos that load quickly and the ability to have a blog again. I found a new web framework called Astro. I got a bit excited at the possibility of this lightweight and very new tech.

I'll summarise these wants as: software for editing and presets, organising system/software, website software and hosting, and a process workflow.

## The research

I started with the software challenge because I thought that would be easy. I guess it was.

### Free software

The free software I selected:

- Darktable - excellent replacement for Lightroom with a learning curve, less polish, fussy tagging/keywords, but an active community and huge potential. Best of all, the software runs its own database alongside a folder structure for images. So I could keep full control of my photos.
- RawTherapee - Amazing for RAW conversion, everything else, not so much. I'm keeping it as a RAW conversion back up tool.
- XnViewMP - thought I would need this for tagging but actually ended up with it as a lightweight viewer only. Optional but quite cool.
- Canva and Affinity - graphic design, photo editing and page layout software. Free (ish). Oh my do I find Affinity tough to work with after years of Photoshop.
- Photomator - solid iPhone editing and preset. Amazing and exactly what I want from mobile editing. 
- Astro framework - to build my website
- Cloudinary - online photo media storage
- Cloudflare - hosting and OAuth access
- Sveltia - Mobile friendly Content Management System

There was no software to compete with the polish of Lightroom Classic and the learning curve has been very steep with many of the tools listed above. But I'm confident that Darktable will be able to replace and in some places exceed most photo management and processing tasks. I really like the output so far and I think it does a better job for me than Photoshop.

Photomator is perfect on the phone. Does exactly what I need and no more. Don't expect Photomator to replace Photoshop or Lightroom on mobile but the tools it has built in: masking, subject and background detection, colour matching and the like are impressive. It also has a good range of presets. 

I still have a subscription to one photography platform - foto.app. It's a bit like Instagram was when it started out except, there is a clearer roadmap with stores, printing, portfolios and more. It's entirely optional and primarily a social platform at the moment. Well worth a look, and you can use many of the features for free. 

### Website

I first found a framework called Hugo. Hugo had a steep learning curve and I found it difficult to understand how to implement a simple content management system (CMS) to the site. I had a go, I built something that didn't look very good and, after failing to get a handle on how to make it look better, gave up.

Then I came across a framework called Astro. Amazing stuff. 

Astro was a different beast entirely. Not quite as quick to get off the ground but the styling and structure made more sense to me. I had a good-looking website up and running in a couple of hours. I'll write more about the time it took to add needed functionality, unneeded but fun functionality, get the style right, and then fix all the little bugs another time. 

Astro runs as a development site on a local machine for testing and from there the files are pushed to GitHub for storage and version control before deploying to Cloudflare for web hosting. Can't get any cheaper, can't get much faster, could be more automated / easier to deploy. Two out of three ain't bad, right?

Finally, I plugged a CMS into the solution using Cloudflare as a server and I am able to create, update and delete articles and coffee logs directly from the web and my iPhone. The list of improvements and refinements I have to make might just keep me busy for the next year. 

### Process

This is the part I haven't quite polished. So this is a work in progress:

1. Connect Sony mirrorless to Mac and copy images onto the hard drive in my existing folder structure - core topic, subtopic and date
2. Load and import into Darktable for rating and deleting of trash images
3. Use ratings and tagging to add to online album collection, including naming and alt tags
4. Export the 'best of' to import into Apple Photo

To do:

1. The album tag will match a Cloudinary tag and automatically send the images using a script.
2. All metadata and alt information will upload to Cloudinary 
3. If there is a matched album tag, the linked album on the website will automatically add photos to it.

Manual tasks:

1. Creation of a new online album
2. Sending iPhone photos to the online album via Darktable or Cloudinary directly

## How did I go about all this?

### Software steps

This is not going to be a section explaining how to install software. Just a high-level look:

- Prep original data and consolidate library
- Tag all photos to replicate Lightroom collections 
- Prep replacement software
- Import photos
- Check and validate everything is working

#### Using the software.

Darktable takes a bit of getting used to. Slight understatement. The way the app manages presets is very different to Lightroom and is challenging because I have a whole range of presets I have made and have used for years in Lightroom. I like a processed image and I start with a number of presets before making adjustments from there. I also have a preset that applies on import so I get a slight style added to all my images.

I have managed to get a number of presets created that I like and placed in a folder structure. The transparency of the preset settings is amazing and it is so easy to duplicate or modify existing presets that I think I'm already starting to prefer this over Lightroom. 

Darktable is all set up with my preferred tags, it has some styles (presets) defined and I know how to filter or view by different collections, I'm so pleased I made the move. I now have to export photos into another editor such as Affinity to do touch-ups but this is so rare that I really don't mind.

### Website steps

- Download and install Astro using terminal
- Install additional tools as required, including a bare-bones starter theme
- Set up a Git repository
- Edit the Astro files and structure to make your website
- Get Cloudinary and Cloudflare accounts
- Upload media
- Install CMS and set up OAuth connection
- Make sure everything works as expected
- Connect custom domain to Cloudflare
- Update albums, articles, etc on site
- Maintain, review, improve.

## Things still to sort out as of this article

1. Quick album creation and upload for iPhone or mirrorless images.
2. Presets for Darktable. Need to keep refining these.
3. A really easy way to get the curated images on to my image server at the right size/quality. It's not especially difficult at the moment but just not very slick. There is a way to script Darktable to tag and export directly to Cloudinary. I just need to find more time.
4. Upgrade the CMS so it can control site settings and have more features on articles. Also create a quick drop album concept so I can make albums on the go.

### In summary

They say we have time, money and energy/knowledge/health. But never enough of all three when we need it.

This experience let me build knowledge enormously quickly, but time was horrendously expensive for me. The project took much more time than I expected. I'm not a pro web designer or coder, though I can code a bit and have done a lot of web design work over the years. I found this project challenging.

The result is so good that I would happily spin up another site, client area or shop. I probably wouldn't have the time, but I will happily continue to make refinements and add features over time. 

I couldn't, in good conscience, suggest others follow this path unless they are really geeky and know what they are getting themselves into.

Ultimately, only you can decide if you want the convenience of Adobe vs the power of your own website, the opportunity to learn something exciting and new, and control of your own digital domain. 

Of course, you could have it all and just throw a bit more money at the problem. There's an awful lot to be said for convenience :)

All of that said... what is important in life? I'm out taking photos again and enjoying sharing my articles, albums and individual photos once again. The website became the driver to get back to some things I enjoy. I can't complain. 

\---

Thanks for reading.

Reach out via the socials below if you have any feedback, alternative stories of escaping Adobe, or great tips for software and processes. I'd love to hear from you. 

Consider buying something from my [affiliate link](https://link.amazon/B0iuqI3D9) to support this site.
