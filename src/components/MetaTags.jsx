import { mergeProps } from "solid-js";
import { Title, Link, Meta } from '@solidjs/meta';

export default function MetaTags(rawProps) {
  const props = mergeProps(
    {
      url: "https://paulmichalet.com",
      title: "Paul's homepage",
      description: "Paul Michalet is a freelance web developer shifting focus on ecodesign."
    },
    rawProps
  );

  return (
    <>
      <Meta charset="utf-8" />
      <Meta name="viewport" content="width=device-width, initial-scale=1" />

      <Title>{props.title}</Title>
      <Meta name="description" content={props.description} />

      {/* TODO [wip] Remove when ready to publish. */}
      <Meta name="robots" content="noindex" />

      <Link rel="canonical" href={props.url} />

      <Meta property="og:title" content={props.title} />
      <Meta property="og:type" content="website" />
      <Meta property="og:url" content={props.url} />
      <Meta property="og:image" content="" />

      <Link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <Link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <Link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <Link rel="manifest" href="/site.webmanifest" />
      <Link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <Meta name="msapplication-TileColor" content="#da532c" />
      <Meta name="theme-color" content="#ffffff" />

      <Link rel="preconnect" href="https://fonts.googleapis.com" />
      <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <Link href="https://fonts.googleapis.com/css2?family=Merriweather+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet" />
    </>
  );
}
