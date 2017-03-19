# Koa Tutorial

Sample Koa.js project

## Table of Contents

- [Installation](#installation)
- [Running](#running)

## Installation

1. Follow [general requirements here](https://github.com/mdzhang/guides/blob/master/DEV_SETUP.md#general-requirements).

1. Clone and enter this repo
    ```sh
    git clone git@github.com:mdzhang/koa-tutorial.git
    cd koa-tutorial
    ```

1. Install Homebrew packages
    ```sh
    brew bundle
    ```

1. Follow Javascript setup steps [here](https://github.com/mdzhang/guides/blob/master/DEV_SETUP.md#javascript)

1. Install development environment variables
    ```sh
    cp .envrc.sample .envrc
    direnv allow
    ```

1. Install git hooks
    ```sh
    pre-commit install
    ```

    *NB*: These hooks will fail if `.envrc` is not up to date

## Running

`npm start`
