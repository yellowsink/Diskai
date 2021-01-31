# Diskai: A Discord theme for Monokai lovers

Isn’t Monokai just a wonderful colour scheme? Let’s make a Discord theme around it!

Main development target will be Powercord because BetterDiscord is broken on canary at the moment (2021-01-30).

I may add support for BBD if I get around to it.

# I want to customise it!!!

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
	--diskai-text-emphasis: var(--diskai-dark-green);
	/* channels */
	--channels-default: var(--text-muted);
	--interactive-active: var(--diskai-text-emphasis);
	--interactive-muted: #555;
	/* headers */
	--header-primary: var(--diskai-text-emphasis);
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
/* None yet */
```



## Custom accent / text emphasis colour

### I want plain white

```css
:root {
    --diskai-text-emphasis: var(--monokai-bright-white) !important;
}
```

### I want to choose one

Pick a Monokai or Diskai colour variable from the Global list and add it into `/*<colour variable>*/`.

```css
:root {
    --diskai-text-emphasis: var(/*<colour variable>*/) !important;
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

Pick a colour variable or define your own colour and add it into `/*<colour>*/`. You would see the defaults under the Light Theme specific list but there aren’t any at the moment (2021-01-31).

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
	--monokai-black: /*<colour>*/;
	--monokai-red: /*<colour>*/;
	--monokai-green: /*<colour>*/;
	--monokai-yellow: /*<colour>*/;
	--monokai-purple: /*<colour>*/;
	--monokai-cyan: /*<colour>*/;
	--monokai-white: /*<colour>*/;
	--monokai-bright-black: /*<colour>*/;
	--monokai-bright-yellow: /*<colour>*/;
	--monokai-bright-white: /*<colour>*/;
	--monokai-background: /*<colour>*/;
	--monokai-foreground: /*<colour>*/;
	/* Diskai colours */
	--diskai-pink: /*<colour>*/;
	--diskai-light-pink: /*<colour>*/;
	--diskai-lilac: /*<colour>*/;
	--diskai-light-blue: /*<colour>*/;
	--diskai-muted-purple: /*<colour>*/;
	--diskai-turquoise: /*<colour>*/;
	--diskai-dark-green: /*<colour>*/;
	--diskai-muted-white: /*<colour>*/;
}
```

# Hey theme devs! Listen!

The hypesquad banner in settings are annoying cause you can only get the class for the house you’re in. As of 2021-01-30, 16:57 GMT, ON DISCORD CANARY:

- `.membershipDialogHouse1-3KhKE-` is the Bravery class
- `.membershipDialogHouse2-35h9SY` is the Brilliance class
- `.membershipDialogHouse3-15OBIQ` is the Balance class