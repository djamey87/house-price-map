#!/usr/bin/env bash
i=0;
for file in $PWD/scripts/rawData.txt; do
    {
        printf '{\n'
        printf '  "points": [\n'
        while read -r line; do
            read -a props;
            if [[ "$i" != '0' ]]; then
                printf ",\n";
            fi
            printf "    %s" '{ "x": '${props[0]}', "y": '${props[1]}', "p": '${props[2]}' }'
            ((i++))
        done
        printf '\n'
        printf '  ]\n'
        printf '}\n'
    } < "$file" > "$PWD/db.json"
done