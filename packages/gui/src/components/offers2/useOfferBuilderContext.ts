import { useContext } from 'react';
import {
  OfferBuilderContext,
  OfferBuilderContextData,
} from './OfferBuilderContext';

export default function useOfferBuilderContext(): OfferBuilderContextData {
  const context = useContext(OfferBuilderContext);

  if (!context) {
    throw new Error(
      'useOfferBuilderContext must be used within a OfferBuilderProvider',
    );
  }

  return context;
}
