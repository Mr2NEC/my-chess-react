# My Chess - real-time multiplayer chess (client)

The React client of a real-time multiplayer chess game with a lobby, game invitations and in-game chat. The server lives in [my-chess-node](https://github.com/Mr2NEC/my-chess-node).

> An early project from 2021. It is kept here as a record of where I started; my current work uses TypeScript and a more modern stack.

## Features

- Registration and login with JWT
- Lobby with a live list of online players
- Invite a specific player to a game, accept or decline
- Full chess game with legal-move highlighting; the board rotates for the player with black
- Check and checkmate detection
- In-game chat

## How it works

**The board comes from the server.** When a player makes a move, the client sends only the move. The server applies it with a chess engine, which rejects illegal moves, and sends the resulting position to both players. The board, the highlighted moves and the check alerts are all rendered from that state, not from a local copy.

**One place for the socket.** The Socket.IO connection lives in a React context. Components call methods such as `sendMove` or `sendMessage` and never touch the socket directly; incoming events are dispatched straight into the Redux store.

## Stack

React 17, Redux, redux-thunk, React Router, react-bootstrap, socket.io-client, jwt-decode.

## Getting started

Start the [server](https://github.com/Mr2NEC/my-chess-node) first, then:

```bash
npm install
npm start
```

The client expects the server at `http://localhost:4000`.

## Author

Vladyslav Shpylka - [LinkedIn](https://www.linkedin.com/in/vshpylka/) · [GitHub](https://github.com/Mr2NEC)
