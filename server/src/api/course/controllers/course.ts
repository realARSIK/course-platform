/**
 * course controller
 */

// import { factories } from '@strapi/strapi'

// export default factories.createCoreController('api::course.course');




import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::course.course', () => ({
  async findOne(ctx) {
    const { id } = ctx.params;
    const entity = await strapi.db
      .query('api::course.course')
      .findOne({
        where: { slug: id },
        populate: ['*'],
      });
    return this.transformResponse(entity);
  },
}));