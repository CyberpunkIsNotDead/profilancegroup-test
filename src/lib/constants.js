export const UserRole = {
  Admin: 'admin',
  User: 'user',
};

export const USERS = [
  {
    name: 'Admin',
    role: UserRole.Admin,
    password: 'admin123',
  },
  {
    name: 'User',
    role: UserRole.User,
    password: 'user123',
  },
];

const TEXT1 = `
Etiam ultricies id neque ac vulputate. Phasellus massa orci, consequat elementum tempus sit amet, ultricies quis velit. Fusce non justo vel lectus auctor elementum. Nunc ac dignissim elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis mollis diam, dignissim pellentesque magna. Nunc tempor lobortis rhoncus. Vivamus vehicula ultricies augue sit amet egestas. Fusce aliquet elit velit, ut hendrerit mauris fringilla non. Vivamus mattis, nunc non blandit vestibulum, mi elit tincidunt lectus, et dignissim dolor turpis in lorem. Fusce aliquet lectus luctus elit ullamcorper, vitae dictum tellus laoreet. Proin at consequat lacus, interdum congue mauris. Phasellus feugiat, ex sit amet auctor viverra, erat justo accumsan mi, vel dapibus urna lacus quis nunc.

Sed vehicula sodales augue, id commodo tortor aliquam vitae. Etiam sapien lectus, eleifend a lectus a, dapibus convallis mi. Sed imperdiet tortor vel odio feugiat, eget hendrerit quam gravida. Maecenas ut luctus dolor. Praesent vestibulum sollicitudin nisl eget vestibulum. Sed sed ex volutpat, sollicitudin sapien vel, consectetur dolor. Vivamus congue imperdiet ex, id sollicitudin neque lacinia in. In ullamcorper porta libero, ac interdum leo pellentesque et.

Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis augue massa, dapibus et sollicitudin sit amet, luctus et elit. Mauris pharetra arcu ipsum, vitae euismod nunc ullamcorper sed. Integer at justo tempor, placerat ligula sed, sodales leo. Morbi ipsum velit, ornare quis pulvinar dapibus, molestie at risus. Donec elit turpis, placerat quis arcu id, malesuada dictum turpis. Mauris lacinia, lectus vitae consectetur imperdiet, enim metus feugiat turpis, id ornare nunc mauris at odio. Proin convallis, ante vel feugiat lobortis, tortor erat efficitur dui, quis congue augue erat nec est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus vel ex arcu. Duis sed nisl sem. Aenean bibendum a massa vestibulum tempor.
`;

const TEXT2 = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ullamcorper orci neque, non elementum libero mattis non. Morbi ac ante magna. Sed placerat, tortor a vehicula tincidunt, diam ante hendrerit sem, blandit suscipit leo lacus eu nisi. Proin fringilla varius sodales. Mauris eu risus non lorem mattis maximus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc non elit nec justo facilisis mollis non ut nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempus tristique neque, vel laoreet dui egestas in. Donec vitae turpis nec nisi pellentesque sagittis vel at nibh. Nunc tincidunt maximus elit a tempor. Proin dignissim mauris quis metus pulvinar pulvinar. Aenean augue dolor, bibendum at velit eget, euismod convallis erat.

Vestibulum rutrum ac ligula scelerisque porttitor. Quisque non lectus nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed ac augue eget justo luctus convallis. Pellentesque vel placerat justo. Integer aliquet lobortis erat convallis luctus. Vivamus sed metus arcu. Pellentesque sodales gravida mi, quis viverra tellus convallis eget. Praesent sapien mi, gravida ac porttitor vitae, rhoncus in urna. Aenean dictum mattis accumsan. Sed faucibus lorem tellus, eu maximus dolor maximus sed.

Fusce eget aliquam dolor. Duis augue lacus, mattis et euismod ut, malesuada porttitor metus. Nunc imperdiet orci quis augue posuere, non convallis diam porta. Morbi ut mauris nec est fringilla egestas sit amet quis erat. Donec facilisis volutpat tortor. Donec faucibus quam risus, vitae interdum tortor ornare eu. Curabitur consectetur, risus sed sodales aliquam, metus mi vestibulum nibh, nec ornare felis urna sed elit. Suspendisse viverra nec ipsum nec rhoncus. Duis vel congue quam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas sit amet sem eros. Etiam vel velit in sem venenatis hendrerit. In vel massa erat. Praesent non lacinia metus, at rhoncus nunc. Suspendisse vel mollis nisi. Nunc ullamcorper molestie enim, vitae sodales turpis efficitur in.
`;

const TEXT3 = `
Sed egestas scelerisque magna, id rhoncus enim elementum vel. Fusce tortor justo, iaculis ac porta eget, rutrum sed felis. Pellentesque faucibus vel urna vitae mattis. Fusce eget neque nec massa sodales feugiat nec id dolor. Quisque id lectus egestas mauris pharetra malesuada eget vel nibh. Maecenas nec mi nec mauris rutrum lacinia et sed eros. Pellentesque urna enim, sollicitudin ut convallis in, rutrum sit amet magna. Praesent quis eros urna. Nullam interdum interdum fermentum. Praesent mauris turpis, faucibus at blandit eget, pretium at libero. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras congue mi vel tortor laoreet dapibus.

Mauris aliquam metus tempus rhoncus imperdiet. Duis eget mi tristique, condimentum justo in, tristique arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse mollis nisl interdum, egestas justo vitae, tristique nibh. Morbi vitae metus id odio cursus aliquam sed a nunc. Morbi sed gravida libero. Etiam efficitur commodo magna, quis mollis nunc feugiat eget. Aliquam at mollis tortor, at sagittis velit.

Sed elit magna, viverra at scelerisque at, vehicula eget est. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum orci nunc, pretium et dictum ut, sollicitudin vel enim. Phasellus non diam sodales, venenatis ante sit amet, auctor augue. Integer ac felis ut arcu iaculis blandit. Sed facilisis enim at felis pretium tincidunt. Donec auctor, libero et porttitor faucibus, est nunc ullamcorper massa, eu facilisis magna sapien eu leo. Proin id elit arcu. Maecenas tempus porta ipsum, quis sollicitudin tortor pellentesque feugiat. 
`;

export const NEWS = [
  {
    creationDate: new Date(2022, 3, 1).toISOString(),
    header: 'Новость 1',
    text: TEXT1,
    isApproved: true,
  },
  {
    creationDate: new Date(2022, 3, 5).toISOString(),
    header: 'Новость 2',
    text: TEXT2,
    isApproved: false,
  },
  {
    creationDate: new Date().toISOString(),
    header: 'Новость 3',
    text: TEXT3,
    isApproved: true,
  },
];
