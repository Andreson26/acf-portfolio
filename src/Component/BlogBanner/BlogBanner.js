"use client"
import { Banner, Heading, Input, Button } from './BlogBanner.styles';


const BlogBanner = () => {
  return (
    <Banner>
      <Heading>Get the Newsletter</Heading>
      <Input type="text" placeholder="First Name" />
      <Input type="email" placeholder="Email Address" />
      <Button>Sign Up</Button>
    </Banner>
  );
};

export default BlogBanner;
