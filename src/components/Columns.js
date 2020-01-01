import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Grid, Container } from '@material-ui/core/'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: '30px'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    minHeight: '400px'
  },
  img: {
		maxHeight: '400px'
	}
}));

export default function Columns() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Container maxWidth="lg">
				<Grid container spacing={3}>
					<Grid item xs={12} md={4}>
						<Paper className={classes.paper}>
						<h2>The Anatomy of a 5 Minute Picture</h2>
<p>After dinner, I walked around downtown to see some nighttime views, just as the sun was setting. But as I got to the statue of Marcus Whitman, my Mom called me just as I was about to press the button. As I talked to my Mom, I got the chance to appreciate surrounding area, from the tree behind it to the moon. In the end, after talking to Mom, I got the picture I wanted, incorporating all three elements in my picture. Hence, the anatomy of a 5 minute Picture.</p>
						</Paper>
					</Grid>
					<Grid item xs={12} md={4}>
						<Paper className={classes.paper}>
							<h2>How far are you from Walla Walla?</h2>
							<p>Portland: 211 miles</p>
							<p>Seattle: 217 miles</p>
							<p>Spokane: 119 miles</p>
							<p>Boise: 198 miles</p>
							<p>Washington D.C.: 2075 miles</p>
						</Paper>
					</Grid>
					<Grid item xs={12} md={4}>
						<Paper className={classes.paper}>
							<h2>Hot Poop!</h2>
							<p>A music store located in Walla Walla, Hot Poop obviously stands out for its funny name. I walked inside just to check it out, but the store was cluttered and felt too much like a maze. I saw some Hot Poop shirts, but nothing I really liked. Otherwise, I didn't see anything to my liking. After a couple of minutes of not seeing anything, I walked out. But hey, I did check out Hot Poop. At least it's not cold.</p></Paper>
					</Grid>
				</Grid>
			</Container>
			<Container maxWidth="lg">
				<Grid container spacing={3}>
					<Grid item xs={12} md={7}>
						<Paper className={classes.paper}>
						<h1>Going Cluckers for Wingman Birdz n Brewz. A restaurant review</h1>
						<p>While I was walking through downtown Walla Walla, I decided to look for some dinner places. I admit I did some research beforehand, coming across a cool looking place called Wingman Birdz & Brewz. There were some other decent places I saw, but nothing stood out as a fun place like this place. So looking for an early dinner, ate my dinner here.</p>

						<p>Inside, I found a fun sports-bar type atmosphere with lots of TV’s with NCAA tournament action and fun looking waiters and waitresses. Though this place looked like a good place to have a beer, I was craving a glass of wine, being in the heart of Walla Walla Wine Country. I settled for a favorite varietal, the Malbec from Oregon. It was quite delicious, a great selection on my behalf.</p>

						<p>For dinner, I picked their standard item, chicken wings. I settled for 6 Boneless Wings with a side of French Fries. For the wings, I had the option of dipping it in a long variety of sauces. I couldn't decide on one I really wanted from a long list, so I picked the Carolina BBQ, with its mustard based BBQ. A questionable pair with the Malbec but I didn't care. The wings were quite delicious, they went down fairly quickly and savored every bite. The fries were plenty and good, seeing that I haven't had them in a while, but they weren't my favorite French Fries by any means.</p>

						<p>Overall, I had a good experience at Wingman Birdz & Brewz. On the plus side, I had a good glass of wine and dinner. On the downside, the only NCAA basketball game I was able to see where I was sitting was Wisconsin vs. Pitt, which was the lowest scoring tournament game in about 15 years. Close game, but I couldn't get into it.</p>
</Paper>
					</Grid>
					<Grid item xs={12} md={5}>
						<img src='/img/wingman.jpg' alt='text'/>
					</Grid>
				</Grid>
			</Container>
			<Container maxWidth="lg">
				<Grid container spacing={3}>
					<Grid item xs={12} md={5}>
						<img src='/img/palouse.jpg' className={classes.img} alt='text'/>
					</Grid>
					<Grid item xs={12} md={7}>
						<Paper className={classes.paper}>
						<h1>I Apologize for Nothing</h1>
<p>Check out my blog on Palouse Falls: It will blow your mind.
Get the lowdown on my drive up to Palouse Falls, from the utterly bizarre Palouse Hills to the raging falls themselves, and everything else in between. Check it Out!</p>
						
						</Paper>
					</Grid>
				</Grid>
			</Container>
			<Container maxWidth="lg">
				<Grid container spacing={3}>
					<Grid item xs={12} md={7}>
						<Paper className={classes.paper}>
						<h1>Boardman, Oregon</h1>
						<h3>Not a place to visit Twice</h3>
						<p>Boardman, Oregon, enough to make you bored man in Oregon. For some reason, my sister felt it was important to tell my Dad I went there twice, based on my Swarm check-in's. Of course, I only stopped there once on the way back. Heading out there, I made a restroom stop near Boardman. I remember going to the rest stop there once remembering it to be the most disgusting bathroom I had ever been in. This time I was pleasantly surprised; it even had a modern sink. Coming back the other direction, I stopped to stretch and walked around a park along the Columbia River for a few minutes. Peaceful enough to remind me why small towns are enjoyable in the right situation, yet not the type of place I would want to live in. Arlington was more interesting when I walked around there a couple of years back. There are way too many industrial plants outside of Boardman, which reminds me too much of Millersburg, Oregon with all the stinky plants along I-5. All in all, it was worth it to stretch out. I even saw a bunch of birds dive into the Columbia River all at once. That was a worthy event. But it's not worth visiting twice, sorry Jenn.</p>
						</Paper>
					</Grid>
					<Grid item xs={12} md={5}>
						<img className={classes.img} src='/img/boardman3.jpg' alt='text'/>
					</Grid>
				</Grid>
			</Container>		
		</div>
  );
}
