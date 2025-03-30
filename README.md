# EV Charger List in Chicago

## Overview

This repository contains a set of Deno scripts to fetch and track the evolution of electric vehicle (EV) charger data in Chicago. The data is retrieved from an external API and stored in JSON files for analysis and comparison.

## Features

- Fetch the latest list of EV chargers for specified zip codes in Chicago.
- Compare two datasets to identify changes, such as newly added or removed EV chargers.
- Store the data in a structured JSON format for further analysis.

## Prerequisites

- [Deno](https://deno.land/) installed on your system.

## Usage

### Fetch the EV Charger List

To fetch the latest list of EV chargers:

```sh
deno run --allow-write --allow-net [fetchList.ts](http://_vscodecontentref_/1)
```

### Compare EV Charger list

```sh
run the compare script: `deno run --allow-read compareLists.ts`
```