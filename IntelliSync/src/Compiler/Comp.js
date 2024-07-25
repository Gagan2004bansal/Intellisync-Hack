import React from 'react';
import { Box } from "@chakra-ui/react";
import CodeEditor from "./components/CodeEditor";
import './custom.css';

const Comp = () => {
    return (
        <div >
            <div className='md:hidden h-90b flex items-center justify-center font-semibold'>This is Not Supported for this Device</div>
            <div className='h-90b overflow-y-scroll hidden md:block'>
                <Box h="90vh" bg="#0f0a19" color="gray.500" px={6} py={8}>
                    <CodeEditor />
                </Box>
            </div>
        </div>
    )
}

export default Comp
