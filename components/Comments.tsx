import * as React from "react"
import { Box, Spinner, Stack, Center } from "@chakra-ui/react"
import useComments from "../hooks/useComments"
import Comment from "./Comment"
import CommentEditior from "./CommentEditor"
import useEvents from "../hooks/useEvents"

interface CommmentsProps {
  topic: string;
}

const Comments: React.FunctionComponent<CommmentsProps> = ({ topic }) => {
  const query = useComments({ topic })

  useEvents({ topic })

  return (
    <Box>
      {query.isLoading && (
        <Center p={8}>
          <Spinner />
        </Center>
      )}
      <Stack spacing={4}>
        {query.data?.map(comment => (
          <Comment key={comment.id} comment={comment} />
        ))}
        {query.isFetched && <CommentEditior topic={topic} />}
      </Stack>
    </Box>
  )
}

export default Comments