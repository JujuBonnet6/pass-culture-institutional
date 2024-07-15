import { Dot } from 'pure-react-carousel'
import styled, { css } from 'styled-components'

// DOT NAVIGATION FOR SLIDERS
export const StyledDot = styled(Dot)`
  ${({ theme }) => css`
    width: 0.875rem;
    min-width: 0.875rem;
    border-radius: 50%;
    height: 0.875rem;
    min-height: 0.875rem;
    opacity: 0.22;
    background-color: ${theme.colors.black};
    cursor: pointer;
    &[disabled] {
      background-color: ${theme.colors.secondary};
      opacity: 1;
    }
  `}
`
// SELECT OPTIONS
export const CustomSelect = styled.div<{
  $isInBreadcrumb?: boolean
  $hasDirection?: string
}>`
  ${({ theme, $isInBreadcrumb }) => css`
    position: relative;
    width: 100%;
    max-width: 100%;
    font-size: 1.15rem;
    color: ${theme.colors.black};
    cursor: pointer;
    height: 100%;

    ul {
      position: absolute;
      list-style: none;
      width: 300px;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
      background-color: #f7f5fb;
      border-radius: 10px;
      padding: 20px;
      ${!$isInBreadcrumb ? 'top: 2.5rem;' : 'top:-100%;'}
      max-height: 25rem;
      overflow-y: auto;
      transition: 0.5s ease;
      z-index: 99;

      &:focus-within {
        box-shadow: 0 10px 25px rgba(94, 108, 233, 0.6);
      }

      &::-webkit-scrollbar {
        width: 7px;
      }
      &::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 25px;
      }
      &::-webkit-scrollbar-thumb {
        background: #ccc;
        border-radius: 25px;
      }
      li {
        position: relative;
        cursor: pointer;
        display: flex;
        gap: 1rem;
        align-items: center;
        font-size: 15px;
        line-height: 30px;
        padding: 5px;
        &:hover {
          color: ${theme.colors.primary};
        }

        label {
          width: 100%;
          padding: 8px 10px;
          cursor: pointer;
        }
      }
    }
    @media (width < ${theme.mediaQueries.mobile}) {
      display: none;
    }
  `}
`
export const CustomSelectButton = styled.div<{ $isInBreadcrumb?: boolean }>`
  ${({ $isInBreadcrumb }) => css`
    cursor: pointer;
    display: block;
    margin-right: 2rem;
    min-height: 50px;
    display: flex;
    align-items: center;
    border-top: none;
    border-right: none;
    border-bottom: none;
    border-image: initial;
    background-color: transparent;
    appearance: none;
    ${$isInBreadcrumb
      ? 'border-left: none;'
      : 'border-left: 1px solid rgba(0, 0, 0, 0.125);'}
    ${$isInBreadcrumb ? 'font-size: 0.75rem;' : 'font-size: 1rem;'}
    ${!$isInBreadcrumb && 'padding: 0px 2rem;'}
    ${!$isInBreadcrumb ? 'font-weight: 700;' : 'font-weight: 500;'}
    ${!$isInBreadcrumb && 'text-transform: uppercase;'}
    ${$isInBreadcrumb &&
    css`
      & svg {
        width: 0.5rem;
      }
    `}
  `}
`

export const StyledSelectButton = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.white};
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    border-radius: 1.25rem;
    margin-top: 1rem;
    margin-left: 1rem;
    @media (width < ${theme.mediaQueries.mobile}) {
      display: none;
    }
  `}
`
export const WrapperChevron = styled.span<{ $isOpen: boolean }>`
  margin-left: 0.875rem;
  transition: all 0.3s ease-in-out;
  ${(p) =>
    p.$isOpen ? 'transform: rotate(180deg)' : 'transform: rotate(0deg)'}
`
