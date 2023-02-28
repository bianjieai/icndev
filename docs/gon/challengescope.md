---
"title": "ChallengesScope"
"description": "game of nfts warm up"
"layout": "PageLayout"
---

#### GoN Challenge Scope
<br/>

# Incentivized
# Testing Rules

<br/>
<br/>

The GoN Incentivized Testing phase is currently underway.
<br/>

Before you start, make sure to check out the rules and requirements on this page.

<br/>
<br/>

## Overview
>Please note that this is not the full version and will be supplemented as the game proceeds. You can visit the [GoN GitHub page](https://github.com/game-of-nfts/gon-testnets) for details.
Through the several rounds in phase 1, participants are expected to gain knowledge and build an understanding of Interchain NFTs and help discover interesting attack vectors.
<br/>

Testnet infrastructure:
>Participants will utilize all GoN testnets for feature-testing, and for completing multiple tasks.
* ICS-721 Enabled SDK and Wasm Chains
* ICS-721 IBC Channels and Ports
* Support Services in Cosmos Discord
* Testnet Faucets
* Testnet Explorers
<br/>

💬 Event coordinators will be available in the [Cosmos Network Discord](https://discord.gg/cosmosnetwork) #🐇┇gon-testnet channel.
<br/>

📍 The scorecard page is now available, visit [here](https://interchainnfts.dev/gon/scorecard.html).

<br/>

## Join & Evidence Submission
According to information provided via the [registration form](https://forms.gle/UCyfH9fjpKLHqWGB9), eligible participants have been invited into [Cosmos Network Discord](https://discord.gg/cosmosnetwork) #🐇┇gon-testnet channel to start coordinating their participation.
<br/>

Before you start testing, please kindly check the join & evidence submission guidance provided at [gon-evidence](https://github.com/game-of-nfts/gon-evidence).
<br/>

In order to verify the authenticity of identity, ensure fairness of the game, and protect participants' rights in receiving points and claiming rewards, please make sure to submit evidence as required.
<br/>

***Please note that all submissions will be public, so please make sure to create new addresses of test chains to participate in the public testing.***

<br/>

## Timeline
The incentivized testing phase has 3 stages with different tasks. Tasks will be revealed gradually as the game progresses.
<br/>

Participants can refer to the [installation doc](https://github.com/game-of-nfts/gon-testnets/blob/main/doc/installation.md) to install the client software and the [instruction doc](https://github.com/game-of-nfts/gon-testnets/blob/main/doc/instruction-ics721.md) to get familiar with Interchain NFTs Transfer operations.

<br/>

## Stage 1: Welcome to GoN
### Duration: Mar 1-3
* Create Collections and NFTs
* Perform Interchain NFTs Transfer
<br/>

### Round 1: Warm-ups
IRISnet, Stargaze, Juno, Uptick and OmniFlix have prepared their testnets, allowing participants to create their collections and NFTs. These NFTs can be used for the next transfer tasks of the game, marking the first time participants can experience Interchain NFT Transfer.
<br/>

### Rules:
* Participant issue their own classes and must set class data as the JSON string below
* This allows participants to bind their classes(collections, denoms) to their GitHub account and prove that they have control over the class owner
* All the following tasks related to NFT transfer must be minted under their classes
* Class owner must be the IRISnet address of the participant at the time of registration
```
{
  "github_username": "username, this is a must",
  "discord_handle": "discord handle, this is optional",
  "team_name": "your team name, this is optional",
  "community": "if you come from a community"
}
```
<br/>

### Tasks:
A1,A2,A3,A4,A5,A6

<br/>

## Point System
### General Tasks
General tasks allow participants to fully experience the NFT-transfer functionality. These tasks will be locked once the 3rd stage has begun, participants must submit evidence generated before then (based on the specified block height). 
>Details of flow and flow style in the task description can be found [here](https://github.com/game-of-nfts/gon-testnets/blob/irisnet/gon-testnets/doc/flow-table.md).
<br/>

|Id|Point|Task|Details|Evidence|
|:----|:----|:----|:----|:----|
|A1|1|Create one Collection on IRISnet|Must set ClassUri and ClassData|TxHash on IRISnet|
|A2|1|Mint NFTs on IRISnet|Must set TokenUri and TokenData and mint at least two NFTs|TxHashes on IRISnet|
|A3|1|Transfer an NFT from IRISnet to Juno or Stargaze|The NFT must be the one created in A2|TxHash on IRISnet<br>Destination Chain-ID<br>Contract-Addr +NFTID|
|A4|1|Transfer an NFT from IRISnet to Uptick or OmniFlix|The NFT must be the one created in A2|TxHash on IRISnet<br>Destination Chain-ID<br>IBC-ClassID+NFTID|
|A5|1|Transfer the NFT on Stargaze or Juno back to IRISnet|The NFT must be the one transferred in A3<br>Transfer back through the same channel in A3|TxHash on Stargaze/Juno<br>Chain-ID|
|A6|1|Transfer the NFT on Uptick or OmniFlix<br>back to IRISnet|The NFT must be the one transferred in A4<br>Transfer back through the same channel in A4|TxHash on Uptick/OmniFlix<br>Chain-ID|
|...|...|...|...|...|

<br/>

### Game Tasks
Coming soon...
<br/>

### Award
|Id|Points|Award|Details|
|:----|:----|:----|:----|
|1|1200|Best Auditor|Discover the most serious potential protocol and code vulnerabilities.|
|2|800|Public Good Awards|Provide the tools to help test Interchain Transfer NFT, including interchain explorers, NFT path visualization tools, wallets, dashboards, etc. At most two.|
|3|350|Community Star|Provide the most help for the game and participants.|
|4|250|Best Promoter|Create the best GoN promotional content on social media.<br>*We will take views and other metrics into consideration*.|
|5|200|Bug Hunters|Find bugs that affect the functionality of ICS-721. At most five.|
|6|100|Best NFT Memes|Create the most popular NFT memes.|
|    |...|...|...|
<br/>

## Rules
The Game of NFTs Phase 1 testing aims to provide mainnet-like environments for participants to better understand and become familiar with Interchain NFTs, and identify potential issues. Breaking the rules listed below will result in disqualification.
<br/>

The rules for Game of NFTs Phase 1 are subject to changes at any time through launch, and any changes will be committed here.
<br/>

### Entry Requirements
To participate, please note that:
* Employees of Organizer Teams (IRISnet, Stargaze, Juno, Uptick, OmniFlix) are eligible to participate, but ineligible for rewards.
* The GitHub account used for testing must be registered for more than one year.
<br/>

### Disqualification
The following behavior will result in disqualification from Game of NFTs Phase 1 Incentivized Testing:
* Registering multiple teams in order to win more testnet prizes than you otherwise would.
* Copying or tampering with any information of other participants to join testing and win rewards.
* Engaging in any prohibited behavior.
<br/>

### Prohibited Behavior
* Engaging in any behaviour that might be unethical / not in line with the community ethics of the Cosmos Hub, IRISnet, Stargaze, Juno, Uptick and OmniFlix.
* Any attack against a node that violates the acceptable use policy outlined by that node's cloud service provider. Please familiarize yourself with those policies (such as Google's, Amazon's, or Digital Ocean's).
* Social engineering attacks against organizer-operated nodes. This includes but is not limited to phishing, compromising cloud account credentials, malware, and physical security attacks on data centers.
* Exploiting application-level security vulnerabilities in Cosmos and Tendermint code.

<br/>

## Acknowledgments
We are grateful to the individuals and teams who have contributed their time and expertise to assist in updating and enhancing this repo.

<br/>

## Reference Links
* [Installation](https://github.com/game-of-nfts/gon-testnets/blob/irisnet/gon-testnets/doc/installation.md)
* [Instruction](https://github.com/game-of-nfts/gon-testnets/blob/irisnet/gon-testnets/doc/instruction-ics721.md)
* [Testnet Info](https://github.com/game-of-nfts/gon-testnets/blob/irisnet/gon-testnets/doc/testnet-info.md)
* [Flow Table](https://github.com/game-of-nfts/gon-testnets/blob/irisnet/gon-testnets/doc/flow-table.md)
* [Channel Table](https://github.com/game-of-nfts/gon-testnets/blob/irisnet/gon-testnets/doc/port-channel-table.md)
* [Evidence Submission](https://github.com/game-of-nfts/gon-evidence)



