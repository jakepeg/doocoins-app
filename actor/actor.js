import { Actor, HttpAgent, Identity } from '@dfinity/agent'
import { defaultMaxListeners } from 'events'

import dfxConfig from "../dfx.json"
// @ts-ignore
import {idlFactory} from '../.dfx/local/canisters/doocoins/doocoins.did'
import canisterId from "../.dfx/local/canister_ids.json"







let doocoins = canisterId.doocoins.local

export const getBackendActor = async (identity) => {
  const agent = new HttpAgent({
    identity,
    host: "https://icp-api.io/" ,
  })

  await agent.fetchRootKey()

  return Actor.createActor(idlFactory, {
    agent,
    canisterId: "ezpat-jyaaa-aaaah-qdbcq-cai",
  })
}
