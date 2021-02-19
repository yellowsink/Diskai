# Diskai: A customisable Discord theme for Monokai lovers

Isn’t Monokai just a wonderful colour scheme? Let’s make a Discord theme around it!

Main development target will be Powercord because BetterDiscord is broken on canary at the moment (2021-01-30).

~~I may add support for BBD if I get around to it.~~ This theme has some features that are enabled with SASS. If you want to use this with BetterDiscord, set your [optional features](#optional-features), then compile it yourself.

# Optional Features

Diskai comes with some optional features that can be enabled and disabled easily. As of now these are:
- Strikethrough muted channels and categories
- Hide the help button (top right)
- [Nicer image spoilers](https://discord.com/channels/538759280057122817/755005803303403570/811210109405495316) (made to look like iOS image spoilers)
- Coloured channel hashtags - removes the unread pill and channel text colours, and shows unread / selected channels by colouring the hashtag icon.
- Disable mention theming because with some plugins such as [this one](https://github.com/A-User-s-Discord-Plugins/role-colors) makes it look bad.
- Add transitions on loads of stuff to \~\~smooth~~ out your Discord experience (and change the duration).

Enable / Disable by editing the variables in your copy of `diskai.theme.scss`: (this shows the defaults)
```scss
/*******************************\
|       OPTIONAL FEATURES       |
\*******************************/

$strikethrough-mute: true;
$hide-help: true;
$ios-image-spoilers: true;
$coloured-channel-hashtags: true;
$disable-mention-theming: false;
$transitions: true;
$transition-duration: .2s;
```

# I want to customise it!!!

**NOTICE: IF YOU PREFER NON-MONOKAI COLOUR SCHEMES, *Diskai Schemes* IS COMING SOON!**

Okay then! Sounds good! Put one of the following in your Quick CSS. Make sure to reference the list of variables.

## Variables list

### Global

```css
:root {
	/* Monokai colours */
	--monokai-black: #1a1a1a;
	--monokai-red: #f4005f;
	--monokai-green: #98e024;
	--monokai-yellow: #fa8419;
	--monokai-purple: #9d65ff;
	--monokai-cyan: #58d1eb;
	--monokai-white: #c4c5b5;
	--monokai-bright-black: #625e4c;
	--monokai-bright-yellow: #e0d561;
	--monokai-bright-white: #f6f6ef;
	--monokai-background: #1a1a1a;
	--monokai-foreground: #c4c5b5;
	/* Diskai colours */
	--diskai-pink: #ff4d91;
	--diskai-light-pink: #ffb3d0;
	--diskai-lilac: #b26bff;
	--diskai-light-blue: #76efdf;
	--diskai-muted-purple: #9567e4;
	--diskai-turquoise: #0bda97;
	--diskai-dark-green: #79b814;
	--diskai-muted-white: #888;
	
	/* VERY IMPORTANT CUSTOMISATION VARIABLES */
	--diskai-accent-colour: var(--diskai-dark-green);
	--diskai-accent-contrast: var(--text-normal);
	--diskai-mention-colour: var(--monokai-purple);
	--diskai-mention-text: var(--text-normal);
}
```

### Dark Theme - specific

```css
.theme-dark {
	/* BG colours */
	/* main BG colours */
	--background-primary: var(--monokai-black);
	--background-secondary: #252525;
	--background-tertiary: #2b2b2b;
	--background-accent: #2f2f2f;
	/* textarea colours */
	--channeltextarea-background: #303030;
	/* fix quick switcher textarea colour */
	--deprecated-quickswitcher-input-background: var(--channeltextarea-background);
	
	/* Text colours */
	/* main Text colours */
	--text-normal: var(--monokai-bright-white);
	--text-muted: var(--diskai-muted-white);
	--text-link: var(--diskai-light-blue);
	/* channels */
	--channels-default: var(--text-muted);
	--interactive-active: var(--diskai-accent-colour);
	--interactive-muted: #555;
	/* headers */
	--header-primary: var(--diskai-accent-colour);
	--header-secondary: #bbb; /* Wait this is actually the stock value */
	
	/* Controls */
	--diskai-control-radio-dot: var(--monokai-purple); /* Radio button */
	--diskai-control-checkbox-checked: var(--monokai-purple); /* Checked checkbox */
	--diskai-control-slider-bar: var(--monokai-purple); /* Slider bar */
	--diskai-control-button: var(--monokai-purple); /* Button */
	--diskai-control-button-muted: var(--diskai-muted-purple); /* Muted Button */
	--diskai-control-button-yellow: var(--monokai-yellow); /* Yellow Button */
	--radio-group-dot-foreground: var(--diskai-control-radio-dot);
}
```

### Light theme - specific

```css
.theme-light {
	/*******************************\
	|          BG colours           |
	\*******************************/
	
	/* main BG colours */
	--background-primary:   var(--monokai-bright-white);
	--background-secondary: #ddddd5;
	--background-mobile-secondary : var(--background-secondary);
	--background-tertiary:  var(--monokai-foreground);
	--background-accent:    #bfbfbf;
	/* --background-modifier-accent: #ffffff18; */
	/* textarea colours */
	--channeltextarea-background: #ccccce;
	/* fix quick switcher textarea colour */
	--deprecated-quickswitcher-input-background: var(--channeltextarea-background);
	
	/* Text colours */
	/* main Text colours */
	--text-normal: var(--monokai-black);
	--text-muted:  var(--monokai-bright-black);
	--text-link:   #2775bd;
	/* channels */
	--channels-default:   var(--text-muted);
	--interactive-active: var(--diskai-accent-colour);
	--interactive-muted:  #ccc;
	/* headers */
	--header-primary:   var(--diskai-accent-colour);
	--header-secondary: #666; /* Wait this is actually the stock value */
	
	/* Controls */
	--diskai-control-radio-dot:        var(--monokai-purple);           /* Radio button */
	--diskai-control-checkbox-checked: var(--monokai-purple);           /* Checked checkbox */
	--diskai-control-slider-bar:       var(--monokai-purple);           /* Slider bar */
	--diskai-control-button:           var(--monokai-purple);           /* Button */
	--diskai-control-button-muted:     var(--diskai-muted-purple);      /* Muted Button */
	--diskai-control-button-yellow:    var(--monokai-yellow);           /* Yellow Button */
	--radio-group-dot-foreground:      var(--diskai-control-radio-dot); /* Radio button dot */

	/* Misc */
	--background-mentioned: #fa84190d;
	--background-mentioned-hover: #fd891c14;
}
```

## Custom accent / text emphasis colour

### I want plain white

```css
:root {
	--diskai-accent-colour: var(--monokai-bright-white) !important;
	--diskai-accent-contrast: var(--monokai-black) !important; /* This colour should contrast against the accent colour */
}
```

### I want to choose one

Pick a Monokai or Diskai colour variable from the Global list and add it into `/*<colour variable>*/`.

```css
:root {
	--diskai-accent-colour: var(/*<colour variable>*/) !important;
	--diskai-accent-contrast: var(/*<colour variable>*/) !important; /* This colour should contrast against the accent colour */
}
```

## @mentions and #channels

### Make it my accent / text emphasis colour

```css
:root {
	--diskai-mention-colour: var(--diskai-accent-colour) !important;
	--diskai-mention-text: var(--diskai-accent-contrast) !important;
}
```

### Lemme choose a separate one!

Pick a Monokai or Diskai colour variable from the Global list and add it into `/*<colour variable>*/`. Default is in Global list.

```css
:root {
	--diskai-mention-colour: var(/*<colour variable>*/) !important;
	--diskai-mention-text: var(/*<colour variable>*/) !important; /* This colour should contrast against the accent colour */
}
```

## Background colours

### Dark theme

Pick a colour variable or define your own colour and add it into `/*<colour>*/`. You can see the defaults under the Dark Theme specific list.

```css
.theme-dark {
	--background-primary: /*<colour>*/ !important;
	--background-secondary: /*<colour>*/ !important;
	--background-tertiary: /*<colour>*/ !important;
	--background-accent: /*<colour>*/ !important;
}
```

### Light Theme

Pick a colour variable or define your own colour and add it into `/*<colour>*/`. You can see the defaults under the Light Theme specific list.

```css
.theme-light {
	--background-primary: /*<colour>*/ !important;
	--background-secondary: /*<colour>*/ !important;
	--background-tertiary: /*<colour>*/ !important;
	--background-accent: /*<colour>*/ !important;
}
```

## I straight up just wanna completely redefine the colours

Not a Monokai lover :(? Well feel free I guess.

Pick a colour variable or define your own colour and add it into `/*<colour>*/`. You can see the defaults under the Global list.

```css
:root {
	/* Monokai colours */
	--monokai-black: /*<colour>*/ !important;
	--monokai-red: /*<colour>*/ !important;
	--monokai-green: /*<colour>*/ !important;
	--monokai-yellow: /*<colour>*/ !important;
	--monokai-purple: /*<colour>*/ !important;
	--monokai-cyan: /*<colour>*/ !important;
	--monokai-white: /*<colour>*/ !important;
	--monokai-bright-black: /*<colour>*/ !important;
	--monokai-bright-yellow: /*<colour>*/ !important;
	--monokai-bright-white: /*<colour>*/ !important;
	--monokai-background: /*<colour>*/ !important;
	--monokai-foreground: /*<colour>*/ !important;
	/* Diskai colours */
	--diskai-pink: /*<colour>*/ !important;
	--diskai-light-pink: /*<colour>*/ !important;
	--diskai-lilac: /*<colour>*/ !important;
	--diskai-light-blue: /*<colour>*/ !important;
	--diskai-muted-purple: /*<colour>*/ !important;
	--diskai-turquoise: /*<colour>*/ !important;
	--diskai-dark-green: /*<colour>*/ !important;
	--diskai-muted-white: /*<colour>*/ !important;
}
```

# Hey theme devs! Listen!

The hypesquad banner in settings are annoying cause you can only get the class for the house you’re in. As of 2021-01-30, 16:57 GMT, ON DISCORD CANARY:

- `.membershipDialogHouse1-3KhKE-` is the Bravery class
- `.membershipDialogHouse2-35h9SY` is the Brilliance class
- `.membershipDialogHouse3-15OBIQ` is the Balance class
