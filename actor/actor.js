import { Actor, HttpAgent, Identity } from '@dfinity/agent'
import { defaultMaxListeners } from 'events'

import dfxConfig from "../dfx.json"
// @ts-ignore
import { idlFactory } from '../.dfx/local/canisters/doocoins'
import canisterId from "../.dfx/local/canister_ids.json"


let doocoins = canisterId.doocoins.local

export const getBackendActor = async (identity) => {
  const agent = new HttpAgent({
    identity,
    host: dfxConfig.networks.local.bind || undefined ,
  })

  await agent.fetchRootKey()

  return Actor.createActor(idlFactory, {
    agent,
    canisterId: doocoins,
  })
}
