"use client"

import { SearchManufecturerProps } from '@/types'
import { TextField, Autocomplete, InputAdornment,Paper } from '@mui/material';
import { manufacturers } from '@/constants';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const SearchManufecturer = ({ manufecturer, setManufecturer }: SearchManufecturerProps) => {
    // const [query, setQuery] = useState("");

  

    return (
        <div className='search-manufacturer'>
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={manufacturers}
                className='relative w-full'
                sx={{
                    width: 300,
                    "& .MuiOutlinedInput-root": {
                        // border: "1px solid yellow",
                        // borderRadius: "0",
                        padding: "0"
                    },
                    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                        border: 'none'
                    }

                    
                }}
                classes={{
                    option: "relative search-manufacturer__opion",
                    // focused: (props) => "bg-primary-blue",
                    // listbox: "relative search-manufacturer__option",
            }}
            onChange={(e, value) => {
                if (value && value.label) setManufecturer(value.label);
                else setManufecturer("");
            }}
            renderInput={(params) => <TextField
                {...params}
                placeholder='Volkswagen'
                InputProps={{
                    ...params.InputProps,
                    startAdornment: (
                        <InputAdornment position="start">
                            <Image src="/car-logo.svg" width={20} height={20} className='ml-4' alt='Car Logo' />
                        </InputAdornment>
                    ),
                    className: "search-manufacturer__input"
                }}
            />}
            />
        </div>
    )
}

export default SearchManufecturer