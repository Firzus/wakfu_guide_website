import { useState } from "react"

import Image from "next/image";

// Asset
import ArrowIcon from '@public/icons/arrow.svg'
import TrashIcon from '@public/icons/trash.svg'

// Test
const TagsDropdown = ({
    tags,
    currentActiveTags,
    onTagChange
}) => {
    const [visibility, setVisibility] = useState(false);

    const toggleTag = (tag) => {
        let updatedTags;

        if (currentActiveTags.some(t => t.id === tag.id)) {
            updatedTags = currentActiveTags.filter(t => t.id !== tag.id);
        } else {
            updatedTags = [...currentActiveTags, tag];
        }

        onTagChange(updatedTags);
    };

    const setStyleTag = (tagId) => {
        return currentActiveTags.some(t => t.id === tagId) ? "bg-red" : "border";
    };

    return (
        <>
            <button
                className="flex bg-black-700 items-center gap-8 px-4 py-2 rounded-full"
                onClick={() => { setVisibility(!visibility) }}
            >
                <label className="uppercase text-white-200 small">
                    tags
                </label>

                <Image
                    className="rotate-90"
                    src={ArrowIcon}
                    alt="Dropdown Icon"
                    width={16}
                    height={16}
                />
            </button>

            {visibility &&
                <footer className="fixed bg-black-700 flex flex-col w-full px-8 pb-64 bottom-0 left-0 z-40 gap-4 rounded-t-3xl">

                    <header
                        className="flex h-8"
                        onClick={() => { setVisibility(false) }}
                    >
                        <hr className="border-white-300 border w-12 rounded-full m-auto" />
                    </header>

                    <section className="flex justify-between">
                        <h3 className="subtitle_2 text-white-100 uppercase">
                            tags
                        </h3>

                        <Image
                            src={TrashIcon}
                            alt="Supprimer la liste de tags actifs"
                            width={16}
                            height={16}
                        />
                    </section>

                    <main className="flex flex-wrap gap-2">
                        {tags.map((tag) => (
                            <button
                                key={tag.id}
                                onClick={(e) => {
                                    e.preventDefault();
                                    toggleTag(tag);
                                }}
                                className={`extra_small text-white-300 uppercase px-2 py-1 rounded-full whitespace-nowrap w-fit ${setStyleTag(tag.id)} `}
                            >
                                {tag.attributes.label}
                            </button>

                        ))}
                    </main>
                </footer>
            }
        </>
    )
}

export default TagsDropdown