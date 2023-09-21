import { useEffect } from 'react';

/**
 * Hook pour écouter les clics à l'extérieur d'un élément référencé.
 * @param {RefObject} ref - La référence de l'élément à surveiller.
 * @param {Function} callback - La fonction callback à appeler lors d'un clic à l'extérieur.
 */
const useOutsideClick = (ref, callback) => {
    const handleClick = e => {
        if (ref.current && !ref.current.contains(e.target)) {
            callback();
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, [ref, callback]);
};

export default useOutsideClick;