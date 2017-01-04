#!/usr/bin/env bash

# ellipsis configuration file
# link all files from inside the dotfiles folder
# this file sets up the linking to the ~ dir.
# @todo: do not link setup files / or remove after

pkg.link() {
    fs.link_files dotfiles
}
