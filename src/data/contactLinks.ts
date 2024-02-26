interface ContactLink {
  name: string;
  username: string;
  url: string;
  title: string;
}

const contactLinks: ContactLink[] = [
  {
    name: "X",
    username: "@hex46_",
    title: "Lien vers mon compte Twitter",
    url: "https://twitter.com/hex46_",
  },
  {
    name: "Mastodon",
    username: "@hex46@mamot.fr",
    title: "Lien vers mon compte Mastodon",
    url: "https://mamot.fr/@hex46",
  },
  {
    name: "Bluesky",
    username: "@hex46.fr",
    title: "Lien vers mon compte Bluesky",
    url: "https://bsky.app/profile/hex46.fr",
  },
  {
    name: "GitHub",
    username: "hex46",
    title: "Lien vers mon compte GitHub",
    url: "https://github.com/hex46",
  },
  {
    name: "Linkedin",
    username: "in/florentalbert/",
    title: "Lien vers mon compte Linkedin",
    url: "https://www.linkedin.com/in/florentalbert/",
  },
];

export default contactLinks;
