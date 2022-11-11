interface genericInterface<IT> {
    items: IT[],
    random: IT
}
class genericClass<CT> implements Partial<genericInterface<string>> {

    constructor(public id: CT, public name: string, public items: string[]){}

    genericFunction<FT>(num: FT): FT{
        return num;
    }

}

export default new genericClass('1','saloni',['phone','laptop'])