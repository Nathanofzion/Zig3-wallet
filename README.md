# Zig3 v2.0 Wallet

Welcome to the new and improved V 2.0 WEB3 Zig3 wallet! The Zioncoin gen 3
wallet means; You can now Connect to banks from all over the world, with Sep 24
Anchors

This wallet is a repo intergation of the Stellar Demo Wallet app which should
now be the defacto application to use when testing anchor services
interactively. If you would like to automate testing of your anchor service,
check out the SDF's
[anchor validation suite](https://github.com/stellar/transfer-server-validator)
viewable at [anchor-validator.stellar.org](anchor-validator.stellar.org).

This project was originally created for the
[Build a Stellar Wallet](https://developers.stellar.org/docs/building-apps/)
tutorial series.
([That repo has since moved over here](https://github.com/stellar/docs-wallet)).
If you want to use parts or all of the project to kickstart your own wallet,
feel free to clone or copy any pieces which may be helpful.

We have added to the foundation of the stellar demo wallet with SCSS styling;for
a new look Zig3 wallet, along with. The Road map for the intergation of pathway
payments for our Instant swap app, tradeview candle charting, stellar TSS for
our Defi project Vinks, stellar NFT app, react native touch id, an new look
market place styled like the stellarport.io exchange and our make an offer app.

## Getting Started

To start building with this project clone this repo and install the deps:

```bash
yarn install
```

and run:

```bash
yarn start
```

To build the app for production, run:

```bash
yarn build
```

---

## Roadmap

- [x] Improve local development story
- [x] Add config-by-url support
- [x] Implement Claimable Balance support
- [x] Add Pubnet Support
- [x] Improve UX
- [x] Imlement SEP-24 support
- [x] Implement SEP-31 support
- [ ] Implement SEP-6 support
- [ ] Intergation of path-pay (https://github.com/Nathanofzion/path-pay)
- [ ] Creation of a new market place exchange like (stellarport.io)
- [ ] Implementation of tradeview candle charting for exchange
      (https://github.com/Nathanofzion/TVChartsOwnData)
- [ ] Creation of Make-An-Offer app styled similiar to path-pay
- [ ] Intergation of stellar TSS for our Defi project Vinks
      (https://github.com/Nathanofzion/stellar-tss)
- [ ] Implementation stellar-NFT-app for both IPFS & cloudflare storage
      (https://github.com/Nathanofzion/StellarNFT)
- [ ] Intergation of react native touch id for both andriod and ios devices

### Helpful links

- [https://www.stellar.org/developers](https://www.stellar.org/developers)
- [https://stellar.github.io/js-stellar-sdk/](https://stellar.github.io/js-stellar-sdk/)
- [https://github.com/stellar/js-stellar-sdk](https://github.com/stellar/js-stellar-sdk)
