import { Box, Loader, Notification, Paper, Text, Title } from '@mantine/core'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { getCategories } from '../utils'
import { IconX } from '@tabler/icons-react'

const Categories = () => {
    const {isLoading, status, data, error, isError } = useQuery({queryKey: ['categories'],queryFn: getCategories})
    const xIcon = <IconX size={20}/>
  data && console.log(data.data)
  //isLoading && <Loader color="blue" />;
  isError && console.log(error)
  return (
    <>
    {isLoading && <Loader color="blue" />}
    {isError && <Notification icon={xIcon} color='red' title="Bummer!">{error.message}</Notification>}
    {data && data.data.map(obj=>
        <Box key={obj.id}>
      <Paper shadow="lg" radius="xl" withBorder p="xl" style={{width:"300px", textAlign:"center"}}>
            <Title order={3}>{obj.name}</Title>
          </Paper>
    </Box>
    )
    
    }
    </>
  )
}

export default Categories
