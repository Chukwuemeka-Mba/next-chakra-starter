import { useEffect, useState } from "react";
import { Button } from "@chakra-ui/react";
import { BsTwitter } from "react-icons/bs";
export default function PrimaryButton() {
  const [authorizeUrl, setAuthorizeUrl] = useState("");
  const [authorize, setAuthorize] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    const fetchAuthorizeUrl = async () => {
      try {
        const response = await fetch("http://localhost:3000/authorize", {
          signal: abortController.signal,
          credentials: "include",
        });
        if (response.status === 200) {
          const { data } = await response.json();
          console.log(data);

          setAuthorizeUrl(data.url);
        } else {
          // TODO: show proper error message for failed response
          alert(await response.json());
        }
      } catch (err) {
        // TODO: log to logging service
        console.log(` Error fetching auth url. see here: \n ${err}`);
      }
    };
    // fetch auth url
    fetchAuthorizeUrl();
    return () => {
      abortController.abort();
    };
  }, []);
  return (
    <Button
      display="flex"
      gap="2"
      colorScheme="blue"
      variant="outline"
      isLoading={authorize}
      loadingText="Connecting"
    >
      <a href={authorizeUrl}>Connect Twitter</a>
      <BsTwitter />
    </Button>
  );
}
