import { useDispatch } from 'react-redux';
import { AppDispatch } from 'app/providers/storeProvider/store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
