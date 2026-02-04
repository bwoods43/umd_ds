# UMD Design System theme
Theme that integrates the [UMD Design System](https://designsystem.umd.edu/) components and styles with Drupal 11 via the [Bootstrap 5](https://www.drupal.org/project/bootstrap5) subtheme.
Version: 2.0.x

## CONTENTS OF THIS FILE

- Introduction
- Requirements
- Installation
- Troubleshooting

## INTRODUCTION

This theme allows the integration of the UMD Design System with a standard Drupal 11 codebase. This theme should be used in most circumstances in conjunction with the [CMNS Starter Kit](https://github.com/bwoods43/cmns-starter), which currently holds the configurations for the paragraph components.

## REQUIREMENTS

It is recommended to install Drupal 11 and apply the CMNS Starter kit, although the theme should work directly with a vanilla install of Drupal 11 as well.

## INSTALLATION

Install codebase via composer. Install theme and set as default via the Appearance page in Drupal admin.

While the current iteration does not use SASS compilation for CSS, it is possible to use SASS to keep track of and generate CSS. For SASS, using the following:

install [sass](https://sass-lang.com/install).

To compile, run from subtheme directory: `sass scss/style.scss css/style.css && sass scss/ck5style.scss css/ck5style.css`

## TROUBLESHOOTING

- Ensure that you have Bootstrap 5 available or this theme will not be installable.
