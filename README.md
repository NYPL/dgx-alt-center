Alt Center

For one source of Alt for component and app Stores and Actions. This simple creates one instance of Alt that can be used for an app that uses modules that themselves use Alt.

## Usage

    import alt from 'dgx-alt-center';

    // In Action files:
    alt.createActions(Actions);

    // In Store files:
    alt.createStore(HeaderStore, 'HeaderStore');

This returns an instance of Alt that can be shared between different components within an app. All Actions and Stores will be added to this one instance.

## Contributing to this repo
* Create a feature branch from `development`
* From the command line rebuild the `/dist` directory with `npm run build`.
* Add & commit the new `/dist` folder and make the pull request
  with `development` as the base.
* Changes must be approved by a peer reviewer
* Merge changes upon approval
* Merge `development` into `master`