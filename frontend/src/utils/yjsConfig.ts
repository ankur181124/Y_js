import * as Y from "yjs";
import { WebsocketProvider } from "y-websocket";

export const ydoc = new Y.Doc();

export const commentsProvider = new WebsocketProvider(
  "ws://localhost:1234",
  "comments-room",
  ydoc
);

export const textProvider = new WebsocketProvider(
  "ws://localhost:1234",
  "text-room",
  ydoc
);

// Shared structures
export const commentsArray = ydoc.getArray("comments");
export const sharedText = ydoc.getText("document");
