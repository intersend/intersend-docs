---
title: 'Intersend Sequence Diagram'
description: 'Sequence diagram showing the interaction flow between User, Wallet App, Intersend, and Your App'
layout: docs
showSidebar: true
---

# Intersend Sequence Diagram

This diagram illustrates the interaction flow between a User, Wallet App, Intersend, and Your App.

![Intersend Sequence Diagram](/apps/sequence-diagram.svg)

## Key Interactions

### Load & Browse Apps
1. User opens the Explore Tab of the Wallet
2. Wallet fetches list of available apps from Intersend
3. Intersend returns the app list to the Wallet

### Launch Selected App
1. User selects an app
2. Wallet loads the app in an iframe through Intersend
3. Intersend wraps your app within its interface
4. Intersend requests wallet info and passes it to your app

### Transaction Flow
1. User initiates a transaction (e.g., purchase, swap)
2. Your app sends an eth_sendTransaction RPC request to Intersend
3. Intersend constructs and sends transaction data to the Wallet
4. Wallet prompts the user to approve the transaction
5. User approves the transaction
6. Wallet signs and broadcasts the transaction to the blockchain
7. Wallet returns the transaction hash to Intersend
8. Intersend sends success or failure status to your app
9. Your app shows a success/failure message to the user
