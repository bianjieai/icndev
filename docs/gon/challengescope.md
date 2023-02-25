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

The GoN Incentivized Testing phase is currently underway. Before you start, make sure to check out the rules and requirements on this page.

<br/>

## Overview

<br/>

Through the several rounds, participants are expected to gain knowledge and build an understanding of the Interchain NFTs feature and assist in the discovery of interesting attack vectors.
<br/>
<br/>
<br/>
<br/>


## Stage 1: Welcome to GoN
<br/>

### From 2023-03-xx to 2023-04-xx
<br/>

<b>Theme:</b> Participants prepare their Collections and NFTs, and have the first attempt at Interchain NFTs Transfer.

<br/>

##### Round 1:  Warm-ups
<br/>

IRISnet, Stargaze, Juno, Uptick and OmniFlix have prepared their testnets, allowing participants to create their collections and NFTs. These NFTs can be used for the next transfer tasks of the game, marking the first time participants can experience Interchain NFT Transfer.

<br/>

##### Tasks：A1, A2, A3, A4, A5, A6

<br/>
<br/>
<br/>

## Stage 2: Let's Dive into Interchain NFTs Transfer

<br/>

### From xxxx-xx-xx to xxxx-xx-xx 
<br/>

<b>Theme:</b> Participants perform Interchain NFTs Transfer according to specified flows.

<br/>

<b>Task Summary:</b> Perform Interchain NFT Transfer through different flows.

<br/>

##### Round 2:  Journey for One
<br/>

Participants complete Interchain NFTs Transfer independently, which means they need to perform operations using their own account addresses on each chain. For each task, participants should start transferring with a different NFT. As a result, they need to create multiple NFTs under their collections.

<br/>

##### Rules:

· Each NFT can only be used as evidence once for tasks in Round 2.<br/>
· Participants must use their own account addresses provided at the registration stage.<br/>
· Flow can be queried off-chain with flow-id.

<br/>

##### Tasks:  A7~A20
<br/>
<br/>
<br/>

### Stage 3: Enjoy the Carnival of GoN
<br/>

### From xxxx-xx-xx to xxxx-xx-xx 
<br/>

<b>Theme:</b> Complete various joyful tasks around Interchain NFTs.

<br/>

##### Task Summary:
<br/>

· Competitive race game <br/>
· Quiz game

<br/>
<br/>

##### Round 2:  Competitive Individual Race
<br/>

Participants receive NFT airdrops on IRISnet, and perform Interchain NFTs Transfer through specified flows in Task Data. The airdrop has two rounds. In the first round all participants go through the same flow, and in the second round all participants go through different flows.

<br/>

##### Task Data:
<pre>
    {
        "type": "individual race round 1/2",
        "flow": "the flow id, check the flow off-chain",
        "last_owner": "the ultimate owner of this NFT",
        "start_height": "transfer before this height are considered valid"
    }
</pre>
<br>

##### Rules:
· The transfer flow can be queried off-chain with flow-id.<br/>
· Start height is the block height on IRISnet.<br/>
· Any transfer prior to the start height will be considered invalid.<br/>
· Participants must use their own account addresses provided at the registration stage.<br/>
· Transferring to incorrect addresses or through incorrect paths will be considered invalid.<br/>
· The same flow means for each transfer the dest chain and the channel are all same.<br/>
· The different flow means for each transfer either the dest chain or the channel can be different.<br/>
· Top participants may receive extra rewards depending on their ranking.<br/>
· The last baton must transfer this NFT to the first baton(participant’s address on IRISnet), then the first baton must transfer this NFT to the last owner on IRISnet to complete this task.

<br/>
<br/>
<br/>

##### Tasks:  A7~A20

