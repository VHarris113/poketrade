# PokeTrade.io
[PokeTrade.io](https://vharris113.github.io/poketrade/)

In a world of Pokemon, only a select few are able to claim the title of Pokemon Master. As card games go, this is one of the top tier best of the best in the world. Finding a possible solution to assisting traders (users) of all ages, backgrounds, and creeds is our mission. With PokeTrade.io, we offer a safe and knowledgeable avenue that will allow the trader to search for, keep record of, and determine valuation of their own Pokemon cards.

Because we have all be in that situation where we never truly understood the value of the card in our hands. Trading a holographic Charizard for a basic Weedle is a common mistake among first time collectors and even veteran traders without the proper database tool to facilitate their exchanges. 


## Homepage
Our descriptive homepage gives a brief explanation of how to utilize the site in the most effective way for our trader.

At the top is a navigation bar for easy trek through the website to the different pages. The top logo also cycles back to the original homepage. This is a feature on every page. For the aside bar on the left, we have an informational section and also offer a disclaimer stating that the website is only a mid-range approximation of prices and does not offer all possible prices per one card.

The main display itself also illustrates an interesting loading animation of each card before it is presented to the user. The act of turning a face down card up to display the cards that belong in our website's inventories (aka APIs and local storage).

Then below that is a general summary of how the site works.

![Homepage](https://github.com/VHarris113/project-one/blob/css/assets/images/homepagescreencap.png)

## Collection Page

The collection page allows for a user to store their collection and reference for future use. Within the same page and browser, the user to enter into the search bar on the right hand side of the screen the name of a Pokemon and be given different card options to build their collection. We utilized a TCG API for the card pricing and pictures.

Thanks to the search event listener, we are able to allow the user to type in a Pokemon name and call it to the scrollbar below. As for the main feature, the collection area, is a use of local storage that allows us to add, remove, drag, drop, and reorder cards that the user may possess in their collection.

![Collection](https://github.com/VHarris113/project-one/blob/css/assets/images/collectionscreencap.png)

## Trade Page
The final page, our trade page, offers the trader the ability to compare their card with a possible trade. The left hand side will have the trader's collection, and on the right they can search for the card that is offered to trade. Thanks to our API, we know the mid-price range for each card.

We also used a currency API to allow for the user to switch their type of currency from what the TCG API offers to their country of origin.

![TradePage](https://github.com/VHarris113/project-one/blob/css/assets/images/tradepagescreeencap.png)

## Project Power Point

[Powerpoint](https://docs.google.com/presentation/d/1tFDCFZOsQXqhEw5AcOgcuTWOFOB8EoEqvgU1PnOcYp8/edit?usp=sharing)

## Project Write-Up

[WriteUp](https://docs.google.com/document/d/1fbGN89AT4pLlzJpwJzzMMB8eXXHgcqRt7GQZ97eBr9o/edit?usp=sharing)

## User Story

As a casual Pokémon card collector,
I want to easily be able to gauge the fairness of any trade I may partake in.
When I enter my card,
I am shown its price.
When I enter the trade offer card,
I am shown its price.
When I add more cards to either side,
They are shown together with the previous entries and the overall price updates at bottom of each section
