export const Engine_abi = [
    [
        {
           "type":"constructor",
           "inputs":[
              {
                 "name":"_proposalFee",
                 "type":"uint256",
                 "internalType":"uint256"
              },
              {
                 "name":"_votingFee",
                 "type":"uint256",
                 "internalType":"uint256"
              },
              {
                 "name":"_timePoint",
                 "type":"uint256",
                 "internalType":"uint256"
              },
              {
                 "name":"_proposalID",
                 "type":"uint256",
                 "internalType":"uint256"
              },
              {
                 "name":"sabreDAOAddress",
                 "type":"address",
                 "internalType":"address"
              }
           ],
           "stateMutability":"nonpayable"
        },
        {
           "type":"function",
           "name":"Propose",
           "inputs":[
              {
                 "name":"targets",
                 "type":"address[]",
                 "internalType":"address[]"
              },
              {
                 "name":"values",
                 "type":"uint256[]",
                 "internalType":"uint256[]"
              },
              {
                 "name":"calldatas",
                 "type":"bytes[]",
                 "internalType":"bytes[]"
              },
              {
                 "name":"description",
                 "type":"string",
                 "internalType":"string"
              }
           ],
           "outputs":[
              
           ],
           "stateMutability":"payable"
        },
        {
           "type":"function",
           "name":"SBRDAOGovernorPro",
           "inputs":[
              
           ],
           "outputs":[
              {
                 "name":"",
                 "type":"address",
                 "internalType":"contract SabreDAOGovernorPro"
              }
           ],
           "stateMutability":"view"
        },
        {
           "type":"function",
           "name":"SBRDAO_State",
           "inputs":[
              
           ],
           "outputs":[
              {
                 "name":"",
                 "type":"uint8",
                 "internalType":"enum SabreDAOEngine.SabreDAO_State"
              }
           ],
           "stateMutability":"view"
        },
        {
           "type":"function",
           "name":"SBRSStaking",
           "inputs":[
              
           ],
           "outputs":[
              {
                 "name":"",
                 "type":"address",
                 "internalType":"contract SabreDAOStaking"
              }
           ],
           "stateMutability":"view"
        },
        {
           "type":"function",
           "name":"TimePoint",
           "inputs":[
              
           ],
           "outputs":[
              {
                 "name":"",
                 "type":"uint256",
                 "internalType":"uint256"
              }
           ],
           "stateMutability":"view"
        },
        {
           "type":"function",
           "name":"Vault_State",
           "inputs":[
              
           ],
           "outputs":[
              {
                 "name":"",
                 "type":"uint8",
                 "internalType":"enum SabreDAOEngine.vault_State"
              }
           ],
           "stateMutability":"view"
        },
        {
           "type":"function",
           "name":"Vote_State",
           "inputs":[
              
           ],
           "outputs":[
              {
                 "name":"",
                 "type":"uint8",
                 "internalType":"enum SabreDAOEngine.vote_State"
              }
           ],
           "stateMutability":"view"
        },
        {
           "type":"function",
           "name":"_getBalanceAtTime",
           "inputs":[
              {
                 "name":"account",
                 "type":"address",
                 "internalType":"address"
              },
              {
                 "name":"timePoint",
                 "type":"uint256",
                 "internalType":"uint256"
              }
           ],
           "outputs":[
              {
                 "name":"",
                 "type":"uint256",
                 "internalType":"uint256"
              }
           ],
           "stateMutability":"view"
        },
        {
           "type":"function",
           "name":"a_projectProposer",
           "inputs":[
              {
                 "name":"",
                 "type":"uint256",
                 "internalType":"uint256"
              }
           ],
           "outputs":[
              {
                 "name":"",
                 "type":"address",
                 "internalType":"address"
              }
           ],
           "stateMutability":"view"
        },
        {
           "type":"function",
           "name":"buy",
           "inputs":[
              {
                 "name":"amountToBuy",
                 "type":"uint256",
                 "internalType":"uint256"
              }
           ],
           "outputs":[
              
           ],
           "stateMutability":"payable"
        },
        {
           "type":"function",
           "name":"claimAndUnstake",
           "inputs":[
              {
                 "name":"amountToUnstake",
                 "type":"uint256",
                 "internalType":"uint256"
              }
           ],
           "outputs":[
              
           ],
           "stateMutability":"nonpayable"
        },
        {
           "type":"function",
           "name":"claimReward",
           "inputs":[
              
           ],
           "outputs":[
              
           ],
           "stateMutability":"nonpayable"
        },
        {
           "type":"function",
           "name":"getCurrentVaultStatus",
           "inputs":[
              
           ],
           "outputs":[
              {
                 "name":"",
                 "type":"uint8",
                 "internalType":"enum SabreDAOEngine.vault_State"
              }
           ],
           "stateMutability":"view"
        },
        {
           "type":"function",
           "name":"getParticipationAmount",
           "inputs":[
              {
                 "name":"investor",
                 "type":"address",
                 "internalType":"address"
              }
           ],
           "outputs":[
              {
                 "name":"",
                 "type":"uint256",
                 "internalType":"uint256"
              }
           ],
           "stateMutability":"view"
        },
        {
           "type":"function",
           "name":"getStakeAmount",
           "inputs":[
              {
                 "name":"staker",
                 "type":"address",
                 "internalType":"address"
              }
           ],
           "outputs":[
              {
                 "name":"",
                 "type":"uint256",
                 "internalType":"uint256"
              }
           ],
           "stateMutability":"view"
        },
        {
           "type":"function",
           "name":"m_Proposals",
           "inputs":[
              {
                 "name":"proposalID",
                 "type":"uint256",
                 "internalType":"uint256"
              }
           ],
           "outputs":[
              {
                 "name":"_description",
                 "type":"string",
                 "internalType":"string"
              }
           ],
           "stateMutability":"view"
        },
        {
           "type":"function",
           "name":"m_SabreDAOBuy",
           "inputs":[
              {
                 "name":"user",
                 "type":"address",
                 "internalType":"address"
              }
           ],
           "outputs":[
              {
                 "name":"amount",
                 "type":"uint256",
                 "internalType":"uint256"
              }
           ],
           "stateMutability":"view"
        },
        {
           "type":"function",
           "name":"m_executions",
           "inputs":[
              {
                 "name":"proposalID",
                 "type":"uint256",
                 "internalType":"uint256"
              }
           ],
           "outputs":[
              {
                 "name":"_description",
                 "type":"string",
                 "internalType":"string"
              }
           ],
           "stateMutability":"view"
        },
        {
           "type":"function",
           "name":"m_vaultsInvest",
           "inputs":[
              {
                 "name":"proposalID",
                 "type":"uint256",
                 "internalType":"uint256"
              },
              {
                 "name":"investor",
                 "type":"address",
                 "internalType":"address"
              }
           ],
           "outputs":[
              {
                 "name":"investAmount",
                 "type":"uint256",
                 "internalType":"uint256"
              }
           ],
           "stateMutability":"view"
        },
        {
           "type":"function",
           "name":"m_votes",
           "inputs":[
              {
                 "name":"proposalID",
                 "type":"uint256",
                 "internalType":"uint256"
              }
           ],
           "outputs":[
              {
                 "name":"_proposalId",
                 "type":"uint256",
                 "internalType":"uint256"
              },
              {
                 "name":"_support",
                 "type":"uint8",
                 "internalType":"uint8"
              },
              {
                 "name":"_reason",
                 "type":"string",
                 "internalType":"string"
              }
           ],
           "stateMutability":"view"
        },
        {
           "type":"function",
           "name":"owner",
           "inputs":[
              
           ],
           "outputs":[
              {
                 "name":"",
                 "type":"address",
                 "internalType":"address"
              }
           ],
           "stateMutability":"view"
        },
        {
           "type":"function",
           "name":"proposalExecuted",
           "inputs":[
              {
                 "name":"",
                 "type":"uint256",
                 "internalType":"uint256"
              }
           ],
           "outputs":[
              {
                 "name":"",
                 "type":"bool",
                 "internalType":"bool"
              }
           ],
           "stateMutability":"view"
        },
        {
           "type":"function",
           "name":"proposalID",
           "inputs":[
              
           ],
           "outputs":[
              {
                 "name":"",
                 "type":"uint256",
                 "internalType":"uint256"
              }
           ],
           "stateMutability":"view"
        },
        {
           "type":"function",
           "name":"proposeFee",
           "inputs":[
              
           ],
           "outputs":[
              {
                 "name":"",
                 "type":"uint256",
                 "internalType":"uint256"
              }
           ],
           "stateMutability":"view"
        },
        {
           "type":"function",
           "name":"renounceOwnership",
           "inputs":[
              
           ],
           "outputs":[
              
           ],
           "stateMutability":"nonpayable"
        },
        {
           "type":"function",
           "name":"returnS_vaultProposalAndVoteData",
           "inputs":[
              
           ],
           "outputs":[
              {
                 "name":"",
                 "type":"tuple[]",
                 "internalType":"struct SabreDAOEngine.proposeAndVoteData[]",
                 "components":[
                    {
                       "name":"proposalId",
                       "type":"uint256",
                       "internalType":"uint256"
                    },
                    {
                       "name":"targets",
                       "type":"address[]",
                       "internalType":"address[]"
                    },
                    {
                       "name":"values",
                       "type":"uint256[]",
                       "internalType":"uint256[]"
                    },
                    {
                       "name":"calldatas",
                       "type":"bytes[]",
                       "internalType":"bytes[]"
                    },
                    {
                       "name":"description",
                       "type":"string",
                       "internalType":"string"
                    },
                    {
                       "name":"support",
                       "type":"uint8",
                       "internalType":"uint8"
                    },
                    {
                       "name":"reason",
                       "type":"string",
                       "internalType":"string"
                    }
                 ]
              }
           ],
           "stateMutability":"view"
        },
        {
           "type":"function",
           "name":"returnUSERPROFILE",
           "inputs":[
              {
                 "name":"_proposalID",
                 "type":"uint256",
                 "internalType":"uint256"
              },
              {
                 "name":"user",
                 "type":"address",
                 "internalType":"address"
              }
           ],
           "outputs":[
              {
                 "name":"",
                 "type":"uint256",
                 "internalType":"uint256"
              }
           ],
           "stateMutability":"view"
        },
        {
           "type":"function",
           "name":"s_vault",
           "inputs":[
              
           ],
           "outputs":[
              {
                 "name":"",
                 "type":"address",
                 "internalType":"contract S_vault"
              }
           ],
           "stateMutability":"view"
        },
        {
           "type":"function",
           "name":"s_vaultInvest",
           "inputs":[
              {
                 "name":"_proposalID",
                 "type":"uint256",
                 "internalType":"uint256"
              },
              {
                 "name":"AmountToInvest",
                 "type":"uint256",
                 "internalType":"uint256"
              }
           ],
           "outputs":[
              
           ],
           "stateMutability":"payable"
        },
        {
           "type":"function",
           "name":"s_vaultRefund",
           "inputs":[
              {
                 "name":"_proposalID",
                 "type":"uint256",
                 "internalType":"uint256"
              },
              {
                 "name":"_AmountToReFund",
                 "type":"uint256",
                 "internalType":"uint256"
              }
           ],
           "outputs":[
              
           ],
           "stateMutability":"payable"
        },
        {
           "type":"function",
           "name":"s_vaultTransferFundToTarget",
           "inputs":[
              {
                 "name":"_proposalID",
                 "type":"uint256",
                 "internalType":"uint256"
              }
           ],
           "outputs":[
              
           ],
           "stateMutability":"nonpayable"
        },
        {
           "type":"function",
           "name":"sabreDAO",
           "inputs":[
              
           ],
           "outputs":[
              {
                 "name":"",
                 "type":"address",
                 "internalType":"contract SabreDAO"
              }
           ],
           "stateMutability":"view"
        },
        {
           "type":"function",
           "name":"setVaultStatus",
           "inputs":[
              
           ],
           "outputs":[
              
           ],
           "stateMutability":"nonpayable"
        },
        {
           "type":"function",
           "name":"stake",
           "inputs":[
              {
                 "name":"amount",
                 "type":"uint256",
                 "internalType":"uint256"
              }
           ],
           "outputs":[
              
           ],
           "stateMutability":"nonpayable"
        },
        {
           "type":"function",
           "name":"totalInvestmentAmounts",
           "inputs":[
              {
                 "name":"",
                 "type":"uint256",
                 "internalType":"uint256"
              }
           ],
           "outputs":[
              {
                 "name":"",
                 "type":"uint256",
                 "internalType":"uint256"
              }
           ],
           "stateMutability":"view"
        },
        {
           "type":"function",
           "name":"transferOwnership",
           "inputs":[
              {
                 "name":"newOwner",
                 "type":"address",
                 "internalType":"address"
              }
           ],
           "outputs":[
              
           ],
           "stateMutability":"nonpayable"
        },
        {
           "type":"function",
           "name":"unStake",
           "inputs":[
              {
                 "name":"amount",
                 "type":"uint256",
                 "internalType":"uint256"
              }
           ],
           "outputs":[
              
           ],
           "stateMutability":"nonpayable"
        },
        {
           "type":"function",
           "name":"vote",
           "inputs":[
              {
                 "name":"proposalId",
                 "type":"uint256",
                 "internalType":"uint256"
              },
              {
                 "name":"support",
                 "type":"uint8",
                 "internalType":"uint8"
              },
              {
                 "name":"reason",
                 "type":"string",
                 "internalType":"string"
              }
           ],
           "outputs":[
              
           ],
           "stateMutability":"payable"
        },
        {
           "type":"function",
           "name":"votingFee",
           "inputs":[
              
           ],
           "outputs":[
              {
                 "name":"",
                 "type":"uint256",
                 "internalType":"uint256"
              }
           ],
           "stateMutability":"view"
        },
        {
           "type":"event",
           "name":"Investment",
           "inputs":[
              {
                 "name":"investor",
                 "type":"address",
                 "indexed":true,
                 "internalType":"address"
              },
              {
                 "name":"proposalID",
                 "type":"uint256",
                 "indexed":false,
                 "internalType":"uint256"
              },
              {
                 "name":"amount",
                 "type":"uint256",
                 "indexed":false,
                 "internalType":"uint256"
              }
           ],
           "anonymous":false
        },
        {
           "type":"event",
           "name":"OwnershipTransferred",
           "inputs":[
              {
                 "name":"previousOwner",
                 "type":"address",
                 "indexed":true,
                 "internalType":"address"
              },
              {
                 "name":"newOwner",
                 "type":"address",
                 "indexed":true,
                 "internalType":"address"
              }
           ],
           "anonymous":false
        },
        {
           "type":"event",
           "name":"buyer",
           "inputs":[
              {
                 "name":"buyer",
                 "type":"address",
                 "indexed":true,
                 "internalType":"address"
              },
              {
                 "name":"amount",
                 "type":"uint256",
                 "indexed":false,
                 "internalType":"uint256"
              }
           ],
           "anonymous":false
        },
        {
           "type":"event",
           "name":"en_Proposer",
           "inputs":[
              {
                 "name":"targets",
                 "type":"address",
                 "indexed":false,
                 "internalType":"address"
              },
              {
                 "name":"values",
                 "type":"uint256",
                 "indexed":false,
                 "internalType":"uint256"
              },
              {
                 "name":"calldatas",
                 "type":"bytes",
                 "indexed":false,
                 "internalType":"bytes"
              },
              {
                 "name":"description",
                 "type":"string",
                 "indexed":false,
                 "internalType":"string"
              }
           ],
           "anonymous":false
        },
        {
           "type":"event",
           "name":"ev_Voter",
           "inputs":[
              {
                 "name":"proposalId",
                 "type":"uint256",
                 "indexed":false,
                 "internalType":"uint256"
              },
              {
                 "name":"support",
                 "type":"uint8",
                 "indexed":false,
                 "internalType":"uint8"
              },
              {
                 "name":"reason",
                 "type":"string",
                 "indexed":false,
                 "internalType":"string"
              }
           ],
           "anonymous":false
        },
        {
           "type":"event",
           "name":"ev_claimAndUnstaker",
           "inputs":[
              {
                 "name":"unstaker",
                 "type":"address",
                 "indexed":false,
                 "internalType":"address"
              },
              {
                 "name":"amount",
                 "type":"uint256",
                 "indexed":false,
                 "internalType":"uint256"
              }
           ],
           "anonymous":false
        },
        {
           "type":"event",
           "name":"ev_getStakeAmount",
           "inputs":[
              {
                 "name":"getStakerAmount",
                 "type":"address",
                 "indexed":false,
                 "internalType":"address"
              }
           ],
           "anonymous":false
        },
        {
           "type":"event",
           "name":"ev_stake",
           "inputs":[
              {
                 "name":"staker",
                 "type":"address",
                 "indexed":false,
                 "internalType":"address"
              },
              {
                 "name":"amount",
                 "type":"uint256",
                 "indexed":false,
                 "internalType":"uint256"
              }
           ],
           "anonymous":false
        },
        {
           "type":"event",
           "name":"refund",
           "inputs":[
              {
                 "name":"refunder",
                 "type":"address",
                 "indexed":true,
                 "internalType":"address"
              },
              {
                 "name":"proposalID",
                 "type":"uint256",
                 "indexed":false,
                 "internalType":"uint256"
              },
              {
                 "name":"amount",
                 "type":"uint256",
                 "indexed":false,
                 "internalType":"uint256"
              }
           ],
           "anonymous":false
        },
        {
           "type":"event",
           "name":"vaultStatusChanged",
           "inputs":[
              {
                 "name":"newState",
                 "type":"uint8",
                 "indexed":false,
                 "internalType":"enum SabreDAOEngine.vault_State"
              }
           ],
           "anonymous":false
        },
        {
           "type":"error",
           "name":"OwnableInvalidOwner",
           "inputs":[
              {
                 "name":"owner",
                 "type":"address",
                 "internalType":"address"
              }
           ]
        },
        {
           "type":"error",
           "name":"OwnableUnauthorizedAccount",
           "inputs":[
              {
                 "name":"account",
                 "type":"address",
                 "internalType":"address"
              }
           ]
        },
        {
           "type":"error",
           "name":"ProposalFee_notCorrect",
           "inputs":[
              
           ]
        },
        {
           "type":"error",
           "name":"SBRState_notCorrect",
           "inputs":[
              
           ]
        },
        {
           "type":"error",
           "name":"SBRinvalidSupportError",
           "inputs":[
              
           ]
        },
        {
           "type":"error",
           "name":"SabreDAO_noEnoughToken",
           "inputs":[
              
           ]
        },
        {
           "type":"error",
           "name":"SabreDAO_notAnHolder",
           "inputs":[
              
           ]
        },
        {
           "type":"error",
           "name":"currentVaultStatusError",
           "inputs":[
              
           ]
        },
        {
           "type":"error",
           "name":"invalidProposalIDError",
           "inputs":[
              
           ]
        },
        {
           "type":"error",
           "name":"proposalExecuteError",
           "inputs":[
              
           ]
        },
        {
           "type":"error",
           "name":"voteFee_notCorrect",
           "inputs":[
              
           ]
        }
     ]
] as const 