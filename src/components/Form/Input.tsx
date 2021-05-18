import { Input as ChakraInput, FormLabel, FormControl, InputProps as ChakraInputProps } from '@chakra-ui/react';

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
}

export function Input({ name, label, ...rest }: InputProps) {
  return (
    <FormControl>
      { !!label && <FormLabel htmlfor={name}>{label}</FormLabel>}

      <ChakraInput
        name={name}
        id={name}
        focusBorderColor="pink.500"
        variant="filled"
        bg="gray.900"
        _hover={{
          bg: 'gray.900'
        }}
        size="lg"
        {...rest}
      />
    </FormControl>
  )
}