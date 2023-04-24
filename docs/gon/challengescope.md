---
"title": "ChallengesScope"
"description": "game of nfts warm up"
"layout": "PageLayout"
---

#### GoN Phase Ⅱ

<br/>

# Interchain Hackathon
# Challenge Scope

<br/>
<br/>

Registration and submissions for the Interchain Hackathon are now open!
To embark on your Hackathon adventure, please sign up and carefully read through the [rules](https://dorahacks.io/hackathon/game-of-nfts/rules) and challenge descriptions below.

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

## Challenge Descriptions

<br/>

### Cosmos Hub Track
Serving as the economic center of Cosmos, the Cosmos Hub is a blockchain that provides vital services to the Interchain. The Cosmos Hub pioneered a new era in the blockchain space by being the first public proof-of-stake blockchain built on top of a Byzantine Fault Tolerant consensus engine.

<br/>

#### Challenge

<br/>

For this challenge, you are encouraged to build something that combines Interchain NFTs with Interchain Security and maximizes the capability of IBC, helping grow submissions into viable products that add value to the ATOM economic zone.

<br/>

Some rough ideas for participants:
* Spin up an NFT consumer chain
* Build NFT dApps on a consumer chain (Neutron)
* Build Interchain NFT use cases across consumer chains

<br/>

Requirements & Docs will be added soon...

<br/>

#### Prize Pool (equaling $50k)

<br/>

* 1st Place: 2,750 ATOM
* 2nd Place: 1,250 ATOM
* 3rd Place: 500 ATOM

<br/>

### IRISHUB Track

<br/>

IRISHUB (a.k.a IRISnet) is an Interchain NFT Hub tailored for next-generation dApps. Built using the Cosmos SDK, it facilitates cross-chain interoperability of NFTs, services, and on/off-chain systems.

<br/>

#### Challenge

<br/>

For this challenge, you should build something on IRISHUB testnet using the ICS721 Interchain NFTs. This could be an application, platform, marketplace or other use cases that utilizes the ICS721 to provide NFT interoperability.

<br/>

Some rough ideas for you:
* EVM implementation of ICS721, enabling seamless interoperability of NFTs between EVM-compatible chains and IRISHUB.
* An Interchain NFTs project, Marketplace (dApp), or other supportive tooling (e.g. NFT rentals, gamification, etc.) to support the burgeoning NFT ecosystem on IRISHUB.

<br/>

#### Track Requirments

<br/>

* Open Source: Your project must be open-source and hosted on Github or Gitlab.
* Development Phase: At least a Proof of Concept (PoC) with a realistic and actionable plan of implementation.
* Video Demo: Provide a video demo to illustrate your project.
* Documentation: Document the architecture, decisions and build & run steps a README.md at the root of your project.
* User Interface: Have a working UI/functionality will be a plus.

<br/>

#### Docs

<br/>

[https://github.com/cosmos/ibc/tree/main/spec/app/ics-721-nft-transfer](https://github.com/cosmos/ibc/tree/main/spec/app/ics-721-nft-transfer)
[https://docs.cosmos.network/main/modules/nft](https://docs.cosmos.network/main/modules/nft)
[https://github.com/bianjieai/nft-transfer](https://github.com/bianjieai/nft-transfer)
[https://github.com/game-of-nfts/gon-testnets/blob/main/doc/testnet-info.md#irisnet](https://github.com/game-of-nfts/gon-testnets/blob/main/doc/testnet-info.md#irisnet)
...

<br/>

#### Prize Pool (equaling $50k)

<br/>

* 1st Place: 745,379 IRIS
* 2nd Place: 447,227 IRIS
* 3rd Place: 298,152 IRIS

<br/>

### Stargaze Track

<br/>

Stargaze is a community-owned app chain for NFTs and beyond. Stargaze prioritizes UX and UI to offer the most seamless user experience. Stargaze is 100% carbon neutral and requires zero gas. It is powered by CosmWasm and $STARS. Stargaze offers a fully decentralized NFT marketplace and exemplifies high levels of security, transparency, and flexibility. All chain code is open-source.

<br/>

#### Challenge #1:

Create governance adjustable entry incentives and exit tax for NFT transfers.

<br/>

Stargaze aims to make a comfortable home for NFTs to live on-chain. In order to facilitate this, we would like to build a mechanism that pays an incentive for NFTs that come to Stargaze from other chains. Inversely, Stargaze would like an adjustable tax for NFTs that transfer to another chain. This is very similar to a tariff mechanism in trade between two different countries.

<br/>

#### Challenge #2:

<br/>

Stargaze aims to integrate with Gravity Bridge in order to enable NFT transfers from Ethereum. In order to do this, we will need the following steps to be completed:

<br/>

(1) Install sdk.nft 0.46 on Gravity Bridge testnet. Gravity Bridge will be using sdk.nft and therefore needs the upgrade. The testnet branch can be found [here](https://github.com/Gravity-Bridge/Gravity-Bridge/tree/christianborst/sdk-upgrade-v0.46).
(2) Install sdk.nft based ics721 version into Gravity Bridge.
(3) Update Gravity Bridge orchestrator in the following way:
* Listen to the NFT transfer into gravity contract event on Ethereum
* Construct an ics721 packet
* Publish ICS721 packet to the chain
(4) Test an NFT transfer from Ethereum -> Gravity Bridge -> Stargaze
> *Note that for this challenge, you will be collaborating with @synchronetic (Twitter)*

<br/>

#### Docs

<br/>

* [CosmWasm Smart Contracts development](https://docs.stargaze.zone/developers/cosmwasm-smart-contracts)
* [Launching an NFT project](https://docs.stargaze.zone/guides/readme)
* [CosmWasm ics721 implementation](https://github.com/public-awesome/ics721)

<br/>

#### Prize Pool (equaling $50k)

<br/>

* 1st Place: $25k in STARS
* 2nd Place: $15k in STARS
* 3rd Place: $10k in STARS

<br/>

### Uptick Track

<br/>

Uptick Network is an NFT ecosystem application chain built on the Cosmos SDK with EVM module support. We encourage participants to explore and create innovative cross-chain use cases based on NFTs, including but not limited to collectable, utility, and rights-based NFTs. Uptick Network provides the ability to convert NFT assets from Uptick EVM to Uptick Cosmos-SDK, and enables cross-chain transfer of NFT assets based on IBC ICS-721 through Uptick Cosmos-SDK and other chains.

<br/>

#### Challenge

<br/>

For this challenge, you should create NFT assets and dApps using Uptick's EVM and leveraging ICS721 Interchain NFTs between the Uptick Network testnet and other GON testnet chains to enable the display of imaginative use cases.

<br/>

Suggestions for the challenges:
* Enable cross-chain transfer of NFT assets between Uptick EVM and target chains such as COSMOS-SDK, for example, the interchain operation of NFT assets between Uptick and IRISnet.
* Enable cross-chain transfer of NFT assets between Uptick EVM and target chains with WASM support.
* Define valuable cross-chain NFT scenarios based on the established NFT transfer channels, implement them through dApp based on Uptick Chain EVM, and demonstrate the necessity of NFT cross-chain transfer with user-friendly UI displays.
* Provide tools and services for cross-chain functionality deployable on Uptick Chain, including but not limited to multi-chain NFT wallets, browser support for cross-chain NFT queries, and cross-chain NFT data analysis.
* Provide interchain NFT visual tools or protocols and middleware deployable on Uptick Chain.
* Bonus points for creative and practical implementations of use cases for Collectible NFTs and Utility NFTs in dApps, including but not limited to various cases on collectible and utility NFTs.

<br/>

#### Requirements

<br/>

**Mandatory Requirements:**
* Completeness: The project should be presented as a demo (at least Proof of Concept), but it should have logical completeness and implement specific functionalities. A relatively complete documentation should also be provided.
* Cross-chain relevance: The project must be deployed on Uptick Chain and be related to cross-chain NFT.
* Business value: The actual use case of the project and the potential business value should be clearly explained.

<br/>

**Bonus Points:**
* Code open source: The project code is open source on platforms such as GitHub or GitLab.
* Demonstration and explanation: A complete video demonstration or PowerPoint presentation is provided to explain the project.
* Development language and framework: Mainstream development languages and frameworks are used, including Golang, React, Python, Solidity.

<br/>

#### Docs

<br/>

[https://docs.uptick.network/intro/architecture.html](https://docs.uptick.network/intro/architecture.html)
[https://docs.uptick.network/intro/resources.html](https://docs.uptick.network/intro/resources.html)
[https://docs.uptick.network/testnet/faucet.html](https://docs.uptick.network/testnet/faucet.html)
[https://docs.uptick.network/mainnet/explorer.html](https://docs.uptick.network/mainnet/explorer.html)
[https://github.com/xavier200203/gon-workshop](https://github.com/xavier200203/gon-workshop)

<br/>

#### Prize Pool

<br/>

* 1st Place: 150,000 in UPTICK
* 2nd Place: 120,000 in UPTICK
* 3rd Place: 90,000 in UPTICK
* 4th-5th Places: 30,000 UPTICK each
* 6th-9th Places: 20,000 UPTICK each
Total: 500,000 UPTICK

<br/>

Uptick Network encourages active participation from developers in the construction of the NFT application ecosystem on Uptick Network. It is not just about participating in this hackathon, but more importantly, taking the projects developed during the hackathon to the stage of actual operation. Uptick Network will provide strong support in this regard. All winners will enter the whitelist of Uptick Network's developer community and be prioritized for participation in Uptick Network's developer incentive program, which includes further incentives and incubation support, helping to turn your promising ideas and prototypes into fully operational products.

<br/>

### OmniFlix Track

<br/>

OmniFlix is the interoperable p2p network for creators & sovereign communities (DAOs or otherwise) to mint, manage, monetize & coordinate distribution activities around NFTs.

<br/>

#### Challenge

<br/>

Build a dApp (other than a marketplace) that will utilize interchain NFTs on OmniFlix and a DeFi protocol

<br/>

#### Track Requirments

<br/>

Bonus points will be awarded if CosmWasm Smart Contracts or ICA are used.

<br/>

#### Prize Pool

<br/>

* 1st Place: 50,000 FLIX
* 2nd Place: 25,000 FLIX
* 3rd Place: 25,000 FLIX

<br/>

***More details will be added soon…***

<br/>

## Important Links

<br/>

**Coordination Channel**
* [Cosmos Discord](https://discord.gg/cosmosnetwork) #🦦┇gon-hackathon

<br/>

**GitHub Pages**
* [Interchain NFT (ICS-721) Specs](https://github.com/cosmos/ibc/tree/main/spec/app/ics-721-nft-transfer)
* [ICS-721 Go implementation](https://github.com/bianjieai/nft-transfer)
* [ICS-721 CosmWasm implementation](https://github.com/public-awesome/ics721)

<br/>

**Announcements**
* [Introducing Interchain NFTs](https://medium.com/the-interchain-foundation/interchain-nft-a-protocol-for-bridging-assets-between-chains-9473cd47cba7)
* [Announcing GoN Incentivized Testing](https://blog.cosmos.network/announcing-game-of-nfts-phase-1-incentivized-testnet-is-open-for-registration-44091b05520e)
* [Kicking off GoN Incentivized Testing](https://blog.cosmos.network/game-of-nfts-incentivized-testing-kicks-off-c4ce529b4922)
* [GoN Incentivized Testing Updates](https://blog.cosmos.network/update-on-game-of-nfts-16f3efdfffd)

<br/>
<br/>
<br/>
<br/>

***[Phase 1 Testing Conclusion]***
The GoN Incentivized Testing phase has been concluded! Welcome to visit the [GitHub page](https://github.com/game-of-nfts/gon-testnets) and [WINNERS page](https://interchainnfts.dev/gon/winners.html) to review the rules and final results.
