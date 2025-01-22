import type { Readable as NodeReadableStream } from 'stream';
export default function nodeStreamIterator<T>(stream: NodeReadableStream): AsyncIterableIterator<T>;
